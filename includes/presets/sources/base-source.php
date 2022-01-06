<?php


namespace Jet_Form_Builder\Presets\Sources;

use Jet_Form_Builder\Blocks\Types\Base;
use Jet_Form_Builder\Exceptions\Preset_Exception;
use Jet_Form_Builder\Presets\Preset_Manager;

abstract class Base_Source {

	protected $fields_map;
	protected $field_data = array();
	protected $field_args;
	protected $preset_data;
	protected $field = '__condition__';
	protected $prop;
	private $src;

	private $current_block;
	protected $permission;

	const FUNC_PREFIX = 'source__';
	const EMPTY = '';

	abstract public function query_source();

	abstract public function get_id();

	public function condition(): bool {
		return true;
	}

	/**
	 * @param $fields_map
	 * @param $preset_data
	 * @param $args
	 *
	 * @return $this
	 * @throws Preset_Exception
	 */
	public function init_source( $fields_map, $preset_data, $args ): Base_Source {
		$this->field_args  = $args;
		$this->field       = $args['name'] ?? '';
		$this->fields_map  = $fields_map;
		$this->preset_data = $preset_data;
		$this->field_data  = $this->get_field_data();
		$this->prop        = $this->get_prop();

		return $this;
	}

	public function after_init(): Base_Source {
		return $this;
	}

	public function after_register() {
	}

	public function on_sanitize(): bool {
		return true;
	}

	public function is_need_prop() {
		return true;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function maybe_query_source() {
		if ( $this->prop ) {
			$this->src = $this->query_source();

			return $this;
		}

		throw new Preset_Exception( 'Empty `prop` in ' . get_class( $this ), $this->field_data );
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	protected function get_field_data() {
		if ( $this->has_field_in_map() ) {
			return $this->fields_map[ $this->field ];
		}

		throw new Preset_Exception(
			"Empty `fields_map['{$this->field}']` in " . get_class( $this ),
			$this->fields_map
		);
	}

	public function has_field_in_map() {
		return ( isset( $this->fields_map[ $this->field ]['prop'] ) || isset( $this->fields_map[ $this->field ]['key'] ) );
	}

	/**
	 * @return mixed
	 */
	public function src() {
		return $this->src;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function safe_src() {
		$this->throw_if_preset_not_available();

		return $this->src();
	}

	/**
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function can_get_preset() {
		return ( ! empty( $this->src() ) && ! is_wp_error( $this->src() ) );
	}

	/**
	 * @return bool
	 * @throws Preset_Exception
	 */
	protected function has_permission(): bool {
		if ( is_null( $this->permission ) ) {
			$this->permission = $this->can_get_preset();
		}

		return $this->permission;
	}

	/**
	 * @throws Preset_Exception
	 */
	final protected function throw_if_preset_not_available() {
		if ( ! $this->has_permission() ) {
			throw new Preset_Exception( static::class . '::can_get_preset return FALSE' );
		}
	}


	/**
	 * @param string $prop
	 *
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function default_prop( string $prop ) {
		$source = $this->src;

		if ( isset( $source->$prop ) ) {
			return $source->$prop;
		} elseif ( isset( $source->data ) && isset( $source->data->$prop ) ) {
			return $source->data->$prop;
		}

		throw new Preset_Exception( "Can't get value from " . get_class( $source ) );
	}

	protected function get_prop() {
		if ( ! $this->is_need_prop() ) {
			return true;
		}
		return ( ! empty( $this->field_data['prop'] ) ? $this->field_data['prop'] : false );
	}

	/**
	 * @return false|mixed
	 * @throws Preset_Exception
	 */
	public function get_result_on_prop() {
		if ( ! $this->is_need_prop() ) {
			return $this->src();
		}
		$func_name = self::FUNC_PREFIX . $this->prop;

		if ( is_callable( array( $this, $func_name ) ) ) {
			return call_user_func( array( $this, $func_name ) );
		}

		return $this->default_prop( $this->prop );
	}


	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	final public function result() {
		$this->throw_if_preset_not_available();

		return $this->parse_result_value( $this->get_result_on_prop() );
	}

	public function parse_result_value( $value ) {
		if ( ! isset( $this->field_args['type'] ) ) {
			return $value;
		}

		return Preset_Manager::instance()->prepare_result( $this->field_args['type'], $value );
	}


	/**
	 * @return Base
	 * @throws Preset_Exception
	 */
	public function get_field_object(): Base {
		if ( is_a( $this->current_block, Base::class ) ) {
			return $this->current_block;
		}
		$type  = $this->field_args['type'] ?? false;
		$block = jet_form_builder()->blocks->get_field_by_name( $type );

		if ( ! $block ) {
			throw new Preset_Exception( 'Undefined block_type: ' . $type, $this->field_args );
		}

		$this->current_block = $block;

		return $block;
	}

	/**
	 * @return mixed
	 * @throws Preset_Exception
	 */
	public function get_expected_format() {
		return $this->get_field_object()->expected_preset_type()[0] ?? 'raw';
	}

}
