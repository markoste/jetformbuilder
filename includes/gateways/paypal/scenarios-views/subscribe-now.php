<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

use Jet_Form_Builder\Db_Queries\Query_Builder;
use Jet_Form_Builder\Exceptions\Query_Builder_Exception;
use Jet_Form_Builder\Gateways\Paypal;
use Jet_Form_Builder\Gateways\Paypal\Web_Hooks\Fetch_Subscribe_Now_Editor;
use Jet_Form_Builder\Gateways\Paypal\Scenarios_Views;

class Subscribe_Now extends Scenario_View_Base {

	use Paypal\Scenarios_Connectors\Subscribe_Now;

	public function get_title(): string {
		return _x( 'Create a subscription', 'Paypal gateway editor data', 'jet-form-builder' );
	}

	public function get_list(): array {
		try {
			return Paypal\Prepared_Views::get_subscriptions_raw(
				array(
					'limit' => 25,
				)
			);
		} catch ( Query_Builder_Exception $exception ) {
			return array();
		}
	}

	public function load_data(): array {
		return array(
			'receive_url' => Paypal\Web_Hooks\Receive_Subscriptions::rest_url(),
		);
	}

	public function get_editor_labels(): array {
		return array_merge(
			array(
				'subscribe_plan_field' => __( 'Subscription Plan Field', 'jet-form-builder' ),
				'subscribe_plan'       => __( 'Subscription Plan', 'jet-form-builder' ),
				'copy_plan_button'     => __( 'Copy selected Plan ID', 'jet-form-builder' ),
				'quantity_field'       => __( 'Quantity field', 'jet-form-builder' ),
				'quantity_manual'      => __( 'Manual input of quantity', 'jet-form-builder' ),
			),
			$this->get_another( Scenarios_Views\Pay_Now::scenario_id() )->get_editor_labels()
		);
	}

	public function get_editor_data(): array {
		return array(
			'fetch'             => array(
				'method' => Fetch_Subscribe_Now_Editor::get_methods(),
				'url'    => Fetch_Subscribe_Now_Editor::rest_url(),
			),
			'plan_from_options' => array(
				array(
					'value' => '',
					'label' => __( 'Manual Input', 'jet-form-builder' ),
				),
				array(
					'value' => 'field',
					'label' => __( 'From Field', 'jet-form-builder' ),
				),
			),
		);
	}

	public function get_single_actions(): array {
		return array(
			'cancel'  => array(
				'label'              => __( 'Cancel subscription', 'jet-form-builder' ),
				'reason'             => array(
					'label'   => __( 'Reason', 'jet-form-builder' ),
					'desc'    => __( 'The reason for the cancellation of a subscription.', 'jet-form-builder' ),
					'default' => 'Not satisfied with the service.',
				),
				'must_have_statuses' => array( 'ACTIVE' ),
			),
			'suspend' => array(
				'label'              => __( 'Suspend subscription', 'jet-form-builder' ),
				'reason'             => array(
					'label'   => __( 'Reason', 'jet-form-builder' ),
					'desc'    => __( 'The reason for suspenson of the subscription.', 'jet-form-builder' ),
					'default' => 'Item out of stock.',
				),
				'must_have_statuses' => array( 'ACTIVE' ),
			),
		);
	}

	public function get_columns_handlers(): array {
		return array(
			'id'               => array(
				'value' => array( $this, 'get_related_id' ),
				'type'  => 'integer',
			),
			'record_id'        => array(
				'value' => array( $this, 'get_item_id' ),
			),
			'status'           => array(
				'value' => array( $this, 'get_status_info' ),
				'type'  => 'rawArray',
			),
			'subscriber'       => array(
				'value' => array( $this, 'get_subscriber_info' ),
				'type'  => 'rawArray',
			),
			'subscriber_email' => array(
				'value' => array( $this, 'get_subscriber_email' )
			),
			'subscriber_id' => array(
				'value' => array( $this, 'get_subscriber_id' )
			),
			'subscriber_name' => array(
				'value' => array( $this, 'get_subscriber_name' )
			),
			'plan_info'        => array(
				'value' => array( $this, 'get_plan_info' ),
			),
			'plan_links'       => array(
				'value' => array( $this, 'get_plan_links' )
			),
			'create_time'      => array(
				'value' => array( $this, 'get_create_time' ),
			),
			'links'            => array(
				'value' => array( $this, 'get_links' ),
				'type'  => 'rawArray',
			),
			'_FORM_ID'         => array(
				'value' => array( $this, 'get_form_id' ),
				'type'  => 'integer',
			),
		);
	}

	public function get_columns_headings(): array {
		return array(
			'heading_1'     => array(
				'label'         => __( 'Subscriber', 'jet-form-builder' ),
				'show_in_table' => false,
			),
			'subscriber'    => array(
				'label'    => __( 'Subscriber Info', 'jet-form-builder' ),
				'children' => array(
					'email_address'    => array(
						'label' => __( 'Email', 'jet-form-builder' ),
					),
					'payer_id'         => array(
						'label' => __( 'Payer ID', 'jet-form-builder' ),
					),
					'name'             => array(
						'label'    => __( 'Name', 'jet-form-builder' ),
						'children' => array(
							'given_name' => array(
								'label' => __( 'Given Name', 'jet-form-builder' ),
							),
							'surname'    => array(
								'label' => __( 'Surname', 'jet-form-builder' ),
							),
						),
					),
					'shipping_address' => array(
						'skip_level' => true,
						'children'   => array(
							'address' => array(
								'label'    => __( 'Address', 'jet-form-builder' ),
								'children' => array(
									'address_line_1' => array(
										// phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
										'label' => sprintf( __( 'Address Line %s', 'jet-form-builder' ), '#1' ),
									),
									'admin_area_2'   => array(
										// phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
										'label' => sprintf( __( 'Admin Area %s', 'jet-form-builder' ), '#2' ),
									),
									'admin_area_1'   => array(
										// phpcs:ignore WordPress.WP.I18n.MissingTranslatorsComment
										'label' => sprintf( __( 'Admin Area %s', 'jet-form-builder' ), '#1' ),
									),
									'postal_code'    => array(
										'label' => __( 'Postal Code', 'jet-form-builder' ),
									),
									'country_code'   => array(
										'label' => __( 'Country Code', 'jet-form-builder' ),
									),
								),
							),
						),
					),
				),
			),
			'create_time'   => array(
				'label' => __( 'Create time', 'jet-form-builder' ),
			),
			'record_id'     => array(
				'label' => __( 'Record ID', 'jet-form-builder' ),
			),
			'status'        => array(
				'label'    => __( 'Status Info', 'jet-form-builder' ),
				'children' => array(
					'status'             => array(
						'label' => __( 'Status', 'jet-form-builder' ),
					),
					'status_update_time' => array(
						'label' => __( 'Last update date', 'jet-form-builder' ),
					),
				),
			),
			'product_name'  => array(
				'label'         => __( 'Product Name', 'jet-form-builder' ),
				'show_in_table' => false,
			),
			'plan_name'     => array(
				'label'         => __( 'Plan Name', 'jet-form-builder' ),
				'show_in_table' => false,
			),
			'billing_cycle' => array(
				'label'         => __( 'Billing Cycle', 'jet-form-builder' ),
				'show_in_table' => false,
			),
			'times_billed'  => array(
				'label'         => __( 'Times Billed', 'jet-form-builder' ),
				'show_in_table' => false,
			),
			'product'       => array(
				'label'         => __( 'Product' ),
				'show_in_table' => false,
			),

			self::COLUMN_ACTIONS => array(
				'label' => __( 'Actions', 'jet-form-builder' )
			)
		);
	}


	/**
	 * By default store related post id
	 * Possible value in $record['order_id'] :
	 *
	 * - 2342
	 */
	public function get_related_id( $record, $undefined ) {
		return $record['order_id'] ?? $undefined;
	}

	public function get_form_id( $record, $default ) {
		return $record['form_id'];
	}

	/**
	 * Possible values in $record['resource']['id'] :
	 * - I-17SAYS7KS71U
	 *
	 * @return mixed
	 */
	public function get_item_id( $record, $undefined ) {
		return $record['resource']['id'] ?? $undefined;
	}

	public function get_links( $record, $default ) {
		return array(
			'cancel'       => array(
				'method' => Paypal\Web_Hooks\Action_Cancel_Subscription::get_methods(),
				'url'    => Paypal\Web_Hooks\Action_Cancel_Subscription::dynamic_rest_url( $record['resource']['id'] ),
			),
			'suspend'      => array(
				'method' => Paypal\Web_Hooks\Action_Suspend_Subscription::get_methods(),
				'url'    => Paypal\Web_Hooks\Action_Suspend_Subscription::dynamic_rest_url( $record['resource']['id'] ),
			),
			'plan_details' => array(
				'method' => Paypal\Web_Hooks\Receive_Plan_Details::get_methods(),
				'url'    => Paypal\Web_Hooks\Receive_Plan_Details::dynamic_rest_url( $record['resource']['id'] ),
			)
		);
	}

	/**
	 * Possible values in $record['resource']['status'] :
	 *
	 * - APPROVAL_PENDING. The subscription is created but not yet approved by the buyer.
	 * - APPROVED. The buyer has approved the subscription.
	 * - ACTIVE. The subscription is active.
	 * - SUSPENDED. The subscription is suspended.
	 * - CANCELLED. The subscription is cancelled.
	 * - EXPIRED. The subscription is expired.
	 */
	public function get_status_info( $record, $undefined ): array {
		return array(
			'status'             => $record['resource']['status'] ?? $undefined,
			'status_update_time' => $this->format_datetime( $record['resource']['status_update_time'] ?? false ),
		);
	}


	/**
	 * Possible value in $record['resource']['plan_id'] :
	 *
	 * - P-2RW14005CT67939112MPP
	 */
	public function get_plan_info( $record, $undefined ) {
		return $record['resource']['plan_id'] ?? $undefined;
	}

	/**
	 * Possible value in $record['resource']['subscriber'] :
	 *
	 * array (
	 * 'email_address' => 'sanko200065@gmail.com',
	 * 'payer_id' => 'VFG6LG948GIRL',
	 * 'name' =>
	 * array (
	 * 'given_name' => 'Олександр',
	 * 'surname' => 'Іваненко',
	 * ),
	 * 'shipping_address' =>
	 * array (
	 * 'address' =>
	 * array (
	 * 'address_line_1' => 'Rumina',
	 * 'admin_area_2' => 'Mykolaiv',
	 * 'admin_area_1' => 'MYKOLAIVSKA OBL',
	 * 'postal_code' => '54000',
	 * 'country_code' => 'UA',
	 * ),
	 * ),
	 * )
	 */
	public function get_subscriber_info( $record, $undefined ) {
		return $record['resource']['subscriber'] ?? $undefined;
	}

	public function get_subscriber_email( $record ) {
		return $record['resource']['subscriber']['email_address'] ?? '';
	}

	public function get_subscriber_id( $record ) {
		return $record['resource']['subscriber']['payer_id'] ?? '';
	}

	public function get_subscriber_name( $record ) {
		$parts = array(
			$record['resource']['subscriber']['name']['given_name'] ?? '',
			$record['resource']['subscriber']['name']['surname'] ?? ''
		);

		return implode( ' ', $parts );
	}

	public function get_billing_info( $record, $undefined ) {
		return $record['resource']['billing_info'] ?? $undefined;
	}

	/**
	 * Possible value in $record['resource']['create_time']:
	 *
	 * - 2021-10-25T07:15:28Z
	 */
	public function get_create_time( $record, $undefined ) {
		return $this->format_datetime( $record['resource']['create_time'] ?? false );
	}

	protected function format_datetime( $datetime ) {
		if ( false === $datetime ) {
			return '0000-00-00 00:00:00';
		}
		$update_time = date( 'Y-m-d H:i:s', strtotime( $datetime ) );

		return get_date_from_gmt( $update_time );
	}

}
