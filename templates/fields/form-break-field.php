<?php
/**
 * next page button template
 */


$this->add_attribute( 'class', 'jet-form-builder__next-page' );
$this->add_attribute( 'class', $args['class_name'] );
$this->add_attribute( 'type', 'button' );
// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
?>
<div class="jet-form-builder__next-page-wrap">
	<?php echo $this->render_disabled_message_form_break( $args ); ?>
	<?php require $this->get_global_template( 'common/prev-page-button.php' ); ?>
	<button<?php $this->render_attributes_string(); ?>><?php echo wp_kses_post( $args['label'] ?: 'Next' ); ?></button>
</div>
<?php
// phpcs:enable WordPress.Security.EscapeOutput.OutputNotEscaped
$this->reset_attributes();
?>
