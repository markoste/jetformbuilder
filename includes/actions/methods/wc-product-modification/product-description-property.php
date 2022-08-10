<?php


namespace Jet_Form_Builder\Actions\Methods\Wc_Product_Modification;


use Jet_Form_Builder\Actions\Methods\Abstract_Modifier;
use Jet_Form_Builder\Actions\Methods\Post_Modification\Post_Content_Property;

/**
 * Update `post_content` \WP_Post property
 *
 * Class Product_Description_Property
 * @package Jet_Form_Builder\Actions\Methods\Wc_Product_Modification
 */
class Product_Description_Property extends Post_Content_Property {

	/**
	 * @param Abstract_Modifier|Wc_Product_Modifier $modifier
	 */
	public function do_before( Abstract_Modifier $modifier ) {
		$product = $modifier->get_product();

		$product->set_description( $modifier->current_value );
	}
}