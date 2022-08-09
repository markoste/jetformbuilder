<?php


namespace Jet_Form_Builder\Actions\Methods\Post_Modification;


use Jet_Form_Builder\Actions\Methods\Base_Object_Property;

class Post_Thumbnail_Property extends Base_Post_Property {

	public function get_prop_name(): string {
		return '_thumbnail_id';
	}

	public function get_label(): string {
		return __( 'Post Thumbnail', 'jet-form-builder' );
	}
}