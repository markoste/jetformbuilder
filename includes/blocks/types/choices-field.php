<?php


namespace Jet_Form_Builder\Blocks\Types;

// If this file is called directly, abort.
use Jet_Form_Builder\Blocks\Exceptions\Render_Empty_Field;
use Jet_Form_Builder\Blocks\Render\Choices_Field_Render;
use function cli\render;

if ( ! defined( 'WPINC' ) ) {
	die;
}


class Choices_Field extends Base {

	public function get_name() {
		return 'choices-field';
	}

	public function render_row_layout() {
		return false;
	}

	/**
	 * @param null|array $wp_block
	 *
	 * @throws Render_Empty_Field
	 */
	public function get_block_renderer( $wp_block = null ) {
		if ( empty( $wp_block['innerBlocks'] ) ) {
			throw new Render_Empty_Field();
		}

		return ( new Choices_Field_Render( $this ) )->render( $wp_block );
	}
}
