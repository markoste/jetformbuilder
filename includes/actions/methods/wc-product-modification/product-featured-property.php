<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Base_Post_Property;

/**
 * Update `product_visibility` taxonomy
 *
 * Class Product_Featured_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Featured_Property extends Base_Post_Property {

	public function get_label(): string {
		return __( 'Product is Featured', 'jet-form-builder' );
	}

	public function get_prop_name(): string {
		return 'is_featured';
	}

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_featured( $modifier->current_value );
	}
}