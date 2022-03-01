<?php


namespace Jet_Form_Builder\Admin\Single_Pages\Meta_Boxes;

use Jet_Form_Builder\Admin\Table_Record_Prepare_Trait;

abstract class Base_Table_Box extends Base_Meta_Box {

	use Table_Record_Prepare_Trait;

	final public function get_values(): array {
		return $this->prepare_list();
	}

	public function to_array(): array {
		return array_merge(
			parent::to_array(),
			array(
				'columns'       => $this->get_columns_headings(),
				'is_table_view' => true,
			)
		);
	}

}