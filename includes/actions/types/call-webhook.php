<?php
namespace Jet_Form_Builder\Actions\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Exceptions\Action_Exception;

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Call_Webhook extends Base {

	public function get_name() {
		return __( 'Call Webhook', 'jet-form-builder' );
	}

	public function get_id() {
		return 'call_webhook';
	}

	public function do_action( array $request, Action_Handler $handler )
    {
        $webhook_url = ! empty( $this->settings['webhook_url'] ) ? esc_url( $this->settings['webhook_url'] ) : false;

        if ( ! $webhook_url ) {
            throw new Action_Exception( 'failed' );
        }

        $args = array(
            'body' => $request,
        );

        /**
         * Filter webhook arguments
         */
        $args = apply_filters(
            'jet-form-builder/action/webhook/request-args', $args, $this->settings, $this
        );

        $response = wp_remote_post( $webhook_url, $args );

        if ( $response instanceof \WP_Error) {
            throw new Action_Exception( 'failed' );
        }
        /**
         * Fires whe webhook response received
         */
        do_action( 'jet-form-builder/action/webhook/response', $response, $this->settings, $this );
    }


    /**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormCallWebHookData', array(
		    'labels' => array(
		        'webhook_url' => __( 'Webhook URL:', 'jet-form-builder' )
            ),
        ) );
	}


}

