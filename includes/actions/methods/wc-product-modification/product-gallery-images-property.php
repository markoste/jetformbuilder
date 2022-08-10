<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;

class Product_Gallery_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return '_product_image_gallery';
	}

	public function get_label(): string {
		return __( 'Product Gallery', 'jet-form-builder' );
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_gallery_image_ids( $modifier->current_value );
	}
}