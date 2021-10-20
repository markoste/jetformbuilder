<?php


namespace Jet_Form_Builder\Gateways\Paypal\Events_Handlers;


class Billing_Plan_Deactivated extends Event_Handler_Base {

	public function get_event_type() {
		return 'BILLING.PLAN.DEACTIVATED';
	}

	public function on_catch_event() {
		// TODO: Implement on_catch_event() method.
	}
}