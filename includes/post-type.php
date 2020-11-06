<?php
namespace Jet_Form_Builder;


use Jet_Form_Builder\Classes\Messages_Helper_Trait;

// If this file is called directly, abort.

if ( ! defined( 'WPINC' ) ) {
	die;
}

/**
 * Post_Type class
 */
class Post_Type {

    use Messages_Helper_Trait;

	/**
	 * Constructor for the class
	 */
	public function __construct() {
		add_action( 'init', array( $this, 'register_post_type' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'admin_assets' ) );
	}

    /**
     * Register admin assets
     *
     * @return void [type] [description]
     */
	public function admin_assets() {

		$screen = get_current_screen();

		if ( ! $screen->action ) {
			$screen->action = ! empty( $_GET['action'] ) ? $_GET['action'] : '';
		}

		$is_editor_page = in_array( $screen->action, array( 'add', 'edit' ) );

		if ( $this->slug() === $screen->id && $is_editor_page ) {
			Plugin::instance()->editor->enqueue_assets();
		} 
		elseif ( $this->slug() !== $screen->id && $is_editor_page ) {
			Plugin::instance()->editor->enqueue_form_assets();
		}

	}

    /**
     * Returns current post type slug
     *
     * @return string [type] [description]
     */
	public function slug() {
		return 'jet-form-builder';
	}

	/**
	 * Register templates post type
	 *
	 * @return void
	 */
	public function register_post_type() {

		$args = array(
			'labels' => array(
				'name'               => esc_html__( 'Jet Forms', 'jet-form-builder' ),
				'singular_name'      => esc_html__( 'Jet Form', 'jet-form-builder' ),
				'add_new'            => esc_html__( 'Add New', 'jet-form-builder' ),
				'add_new_item'       => esc_html__( 'Add New Jet Form', 'jet-form-builder' ),
				'edit_item'          => esc_html__( 'Edit Jet Form', 'jet-form-builder' ),
				'new_item'           => esc_html__( 'Add New Item', 'jet-form-builder' ),
				'view_item'          => esc_html__( 'View Jet Form', 'jet-form-builder' ),
				'search_items'       => esc_html__( 'Search Form', 'jet-form-builder' ),
				'not_found'          => esc_html__( 'No Jet Forms Found', 'jet-form-builder' ),
				'not_found_in_trash' => esc_html__( 'No Jet Forms Found In Trash', 'jet-form-builder' ),
				'menu_name'          => esc_html__( 'Jet Forms', 'jet-form-builder' ),
			),
			'public'              => true,
			'show_ui'             => true,
			'show_in_admin_bar'   => true,
			'show_in_menu'        => true,
			'show_in_nav_menus'   => false,
			'show_in_rest'        => true,
			'publicly_queryable'  => false,
			'exclude_from_search' => true,
			'has_archive'         => false,
			'query_var'           => false,
			'can_export'          => true,
			'rewrite'             => false,
			'capability_type'     => 'post',
			'supports'            => array( 'title', 'editor', 'custom-fields' ),
		);

		$post_type = register_post_type(
			$this->slug(),
			apply_filters( 'jet-form-builder/post-type/args', $args )
		);

        $this->set_default_messages();

		$meta = array(
			'_jf_args'     => array(
				'type'    => 'string',
				'default' => '{}',
			),
			'_jf_actions'  => array(
				'type'    => 'string',
				'default' => '[]',
			),
			'_jf_messages' => array(
				'type'    => 'string',
				'default' => $this->get_default_messages_values_json(),
			),
			'_jf_preset' => array(
				'type'    => 'string',
				'default' => '{}',
			),
		);

		foreach ( $meta as $key => $args ) {

			$args = array_merge( $args, array(
				'show_in_rest'  => true,
				'single'        => true,
				'auth_callback' => function( $res, $key, $post_id, $user_id, $cap ) {
					return user_can( $user_id, 'edit_post', $post_id );
				}
			) );

			register_post_meta( $this->slug(), $key, $args );

		}

	}

    public function get_form_meta( $meta_key, $form_id ) {
        return json_decode( get_post_meta(
            $form_id,
            $meta_key,
            true
        ),
            true
        );
    }

    /**
     * Returns form meta arguments:
     * fields_layout, submit_type and required_mark
     * in assoc array
     *
     * @param $form_id
     * @return array
     */
    public function get_args( $form_id ) {
        return $this->get_form_meta( '_jf_args', $form_id );
    }

    /**
     * Returns form actions
     *
     * @param $form_id
     * @return array
     */
    public function get_actions( $form_id ) {
        return $this->get_form_meta( '_jf_actions', $form_id );
    }

    /**
     * Returns form actions
     *
     * @param $form_id
     * @return array
     */
    public function get_preset( $form_id ) {
        return $this->get_form_meta( '_jf_preset', $form_id );
    }

    /**
     * Returns form actions
     *
     * @param $form_id
     * @return array
     */
    public function get_messages( $form_id ) {
        return $this->get_form_meta( '_jf_messages', $form_id );
    }


	public function set_default_messages() {
	    $this->messages = apply_filters( 'jet-form-builder/message-types', array(
            'success' => array(
                'label' => __( 'Form successfully submitted.', 'jet-form-builder' ),
                'value' => 'Form successfully submitted.',
            ),
            'failed' => array(
                'label' => __( 'Submit failed.', 'jet-form-builder' ),
                'value' => 'There was an error trying to submit form. Please try again later.',
            ),
            'validation_failed' => array(
                'label' => __( 'Validation error', 'jet-form-builder' ),
                'value' => 'One or more fields have an error. Please check and try again.',
            ),
            'empty_field' => array(
                'label' => __( 'Required field is empty', 'jet-form-builder' ),
                'value' => 'The field is required.',
            ),
            'internal_error' => array(
                'label' => __( 'Internal server error', 'jet-form-builder' ),
                'value' => 'Internal server error. Please try again later.',
            ),
        ) );
    }

}
