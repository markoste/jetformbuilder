<?php


namespace Jet_Form_Builder\Actions\Methods\Form_Record;


use Jet_Form_Builder\Db_Queries\Base_Db_Model;
use Jet_Form_Builder\Db_Queries\Exceptions\Skip_Exception;
use Jet_Form_Builder\Db_Queries\Exceptions\Sql_Exception;

class Record_Model extends Base_Db_Model {

	public static function table_name(): string {
		return 'records';
	}

	public static function schema(): array {
		return array(
			'id'                => 'bigint(20) NOT NULL AUTO_INCREMENT',
			'form_id'           => 'bigint(20)',
			'user_id'           => 'bigint(20)',
			'from_content_id'   => 'bigint(20)',
			'from_content_type' => 'varchar(20)',
			'status'            => 'varchar(20)',
			'ip_address'        => 'int(11) UNSIGNED',
			'user_agent'        => 'varchar(256)',
			'created_at'        => 'TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP',
			'updated_at'        => 'TIMESTAMP on update CURRENT_TIMESTAMP NOT NULL'
		);
	}

	public static function schema_keys(): array {
		return array(
			'id'      => 'primary key',
			'form_id' => 'index',
			'user_id' => 'index',
		);
	}

	/**
	 * @throws Skip_Exception|Sql_Exception
	 */
	public function before_insert() {
		$this->safe_create();
		( new Record_Field_Model )->safe_create();
		( new Record_Error_Model )->safe_create();

		parent::before_insert();
	}
}