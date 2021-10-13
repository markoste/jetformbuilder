<?php


namespace Jet_Form_Builder\Gateways\Paypal\Scenarios;


use Jet_Form_Builder\Exceptions\Action_Exception;
use Jet_Form_Builder\Exceptions\Gateway_Exception;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Show_Subscription_Details_Action;
use Jet_Form_Builder\Gateways\Paypal\Actions\Paypal_Subscribe_Now_Action;

class Scenario_Subscribe extends Scenario_Base {

	const SLUG = 'SUBSCRIBE_NOW';

	public function rep_item_id() {
		return self::SLUG;
	}

	protected function query_token() {
		return $_GET['subscription_id'] ?? false;
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception
	 */
	public function process_before() {
		return ( new Paypal_Subscribe_Now_Action() )
			->set_bearer_auth( $this->controller->get_order_token() )
			->set_app_context( array(
				'return_url' => $this->get_success_url(),
				'cancel_url' => $this->get_failed_url()
			) )
			->set_plan_id( 'P-2RW14005CT679391XMFPMEWI' )
			->send_request();
	}

	/**
	 * @return mixed
	 * @throws Gateway_Exception|Action_Exception
	 */
	public function process_after() {
		return ( new Paypal_Show_Subscription_Details_Action() )
			->set_bearer_auth( $this->controller->get_token() )
			->set_subscription_id( $this->get_queried_token() )
			->send_request();
	}

	public function process_save() {
		// TODO: Implement process_save() method.
	}
}