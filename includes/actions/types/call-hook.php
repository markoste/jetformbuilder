<?php
namespace Jet_Form_Builder\Actions\Types;

use Jet_Form_Builder\Actions\Action_Handler;
use Jet_Form_Builder\Classes\Tools;
use Jet_Form_Builder\Exceptions\Action_Exception;

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Define Base_Type class
 */
class Call_Hook extends Base {

	public function get_name() {
		return __( 'Call Hook', 'jet-form-builder' );
	}

	public function get_id() {
		return 'call_hook';
	}

    /**
     * Run a hook notification
     *
     * @param array $request
     * @param Action_Handler $handler
     * @return void
     * @throws Action_Exception
     */
	public function do_action( array $request, Action_Handler $handler ) {

        if ( empty( $this->settings['hook_name'] ) ) {
            throw new Action_Exception( 'failed' );
        }


        /**
         * Fires custom hook. Keep action for backward compatibility.
         *
         * @var string
         */
        do_action(
            'jet-form-builder/custom-action/' . $this->settings['hook_name'],
            $request,
            $handler
        );

        /**
         * Fires custom hook as filter to allow form validation on hook.
         * Use this to perform an action on the hook and return validation result.
         *
         * @var bool
         */
        $handler->response_data['hook_result'] = apply_filters(
            'jet-form-builder/custom-filter/' . $this->settings['hook_name'],
            true,
            $request,
            $handler
        );
    }

    /**
     * @return bool
     */
    public static function can_run() {
        return function_exists( 'jet_engine' );
    }

	/**
	 * Regsiter custom action data for the editor
	 *
	 * @return [type] [description]
	 */
	public function action_data( $editor, $handle ) {

		wp_localize_script( $handle, 'jetFormCallHookData', array(
		    'labels' => array(
		        'hook_name' => __( 'Hook Name:', 'jet-form-builder' )
            ),
        ) );
	}


}

