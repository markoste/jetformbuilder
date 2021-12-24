<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Logic;


use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Db_Models\Payer_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Meta_Model;
use Jet_Form_Builder\Gateways\Db_Models\Payment_Model;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Api_Actions;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Connectors;
use Jet_Form_Builder\Gateways\Prepared_Queries;

class Pay_Now extends Scenario_Logic_Base implements With_Resource_It {

	use Set_Status_Trait;
	use Scenarios_Connectors\Pay_Now;

	protected function query_token() {
		// phpcs:ignore WordPress.Security.NonceVerification.Recommended
		return sanitize_text_field( wp_unslash( $_GET['token'] ?? '' ) );
	}

	public function get_failed_statuses() {
		return array( 'VOIDED' );
	}

	/**
	 * @return void
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		$this->set_gateway_data();

		/**
		 * Create payment by /v2/checkout/orders
		 */
		$payment = $this->create_resource();

		/**
		 * By default save payment id & form data to inserted post meta
		 */
		$this->save_resource( $payment );

		/**
		 * Redirect to Paypal checkout for approve payment
		 */
		$this->redirect_to_checkout( $payment );
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function create_resource() {
		$payment = ( new Api_Actions\Pay_Now_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_app_context(
				array(
					'return_url' => $this->get_success_url(),
					'cancel_url' => $this->get_failed_url(),
				)
			)
			->set_units( array(
				array(
					'currency_code' => $this->controller->current_gateway( 'currency' ),
					'value'         => $this->controller->get_price_var(),
				)
			) )
			->send_request();

		if ( empty( $payment['id'] ) ) {
			throw new Gateway_Exception( $payment['message'], $payment );
		}

		return $payment;
	}

	public function save_resource( $payment ) {
		$payments      = new Payment_Model();
		$payments_meta = new Payment_Meta_Model();
		$payers        = new Payer_Model();

		try {
			$payments->safe_create()->insert( array(
				'transaction_id'         => $payment['id'],
				'initial_transaction_id' => $payment['id'],
				'form_id'                => $this->get_action_handler()->form_id,
				'user_id'                => get_current_user_id(),
				'gateway_id'             => $this->controller->get_id(),
				'scenario'               => self::scenario_id(),
				'amount_value'           => $this->retrieve_amount( $payment, 'value' ),
				'amount_code'            => $this->retrieve_amount( $payment, 'currency_code' ),
				'type'                   => Paypal\Controller::PAYMENT_TYPE_INITIAL,
				'status'                 => $payment['status'],
				'created_at'             => current_time( 'timestamp' ),
			) );

			$payers->safe_create();
			$payments_meta->safe_create();

		} catch ( Sql_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	private function retrieve_amount( $payment, $key ) {
		$unit = $payment['purchase_units'][0] ?? array();

		return $unit['amount'][ $key ] ?? '';
	}

	/**
	 * @return array
	 * @throws Gateway_Exception
	 */
	public function get_gateway_meta() {
		try {
			$this->queried_row = Prepared_Queries::get_payment( array(
				'transaction_id' => $this->get_queried_token()
			) );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}

		$form_id = (int) ( $this->queried_row['form_id'] ?? 0 );

		return jet_form_builder()->post_type->get_gateways( $form_id );
	}


	/**
	 * @throws Gateway_Exception
	 */
	public function process_after() {
		$payment = ( new Api_Actions\Capture_Payment_Action() )
			->set_bearer_auth( $this->controller->get_current_token() )
			->set_order_id( $this->queried_row['transaction_id'] )
			->send_request();

		$model = new Payment_Model();
		$meta  = new Payment_Meta_Model();

		try {
			$model->update(
				array(
					'status' => $payment['status']
				),
				array(
					'id' => $this->queried_row['id']
				)
			);
			$this->queried_row['status'] = $payment['status'];

			$payer_id = Prepared_Queries::insert_payer_with_id( array(
				'payer_id'   => $payment['payer']['payer_id'] ?? '',
				'first_name' => $payment['payer']['name']['given_name'] ?? '',
				'last_name'  => $payment['payer']['name']['surname'] ?? '',
				'email'      => $payment['payer']['email_address'] ?? '',
			) );

			$meta->insert( array(
				'payment_id' => $this->queried_row['id'],
				'meta_key'   => 'payer_relation',
				'meta_value' => $payer_id
			) );

		} catch ( Sql_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		} catch ( Query_Builder_Exception $exception ) {
			throw new Gateway_Exception( $exception->getMessage() );
		}
	}

	/**
	 * @throws Gateway_Exception
	 */
	public function set_gateway_data() {
		$this->controller->set_price_field();
		$this->controller->set_price_from_filed();
		$this->controller->set_current_gateway_options();
	}
}
