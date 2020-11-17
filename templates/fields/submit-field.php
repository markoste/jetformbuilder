<?php
/**
 * submit button template
 */

$has_class = isset( $this->args['class_name'] );

$classes = array(
	'jet-form-builder__submit'
);

if ( $has_class )  {
    $classes[] = $this->args['class_name'];
}
$this->add_attribute( 'class', 'jet-form-builder__submit' );
$this->add_attribute( 'class', 'submit-type-' . $this->factory->spec_data->submit_type );
$has_class ? $this->add_attribute( 'class', $this->args['class_name'] ) : '';

if ( isset( $this->factory->spec_data->submit_type ) && 'reload' === $this->factory->spec_data->submit_type ) {
	$this->add_attribute( 'type', 'submit' );
} else {
	$this->add_attribute( 'type', 'button' );
}

$wrap_classes = array( 'jet-form__submit-wrap' );

if ( isset( $args['add_prev'] ) && ! empty( $args['add_prev'] ) && 1 < $this->factory->spec_data->page ) {
	$wrap_classes[] = 'has-prev';
}

?>
<div class="<?php echo implode( ' ', $wrap_classes ) ?>">
	<?php include $this->get_template( 'common/prev-page-button.php' ); ?>
	<button<?php $this->render_attributes_string(); ?>><?php echo $args['label']; ?></button>
</div>