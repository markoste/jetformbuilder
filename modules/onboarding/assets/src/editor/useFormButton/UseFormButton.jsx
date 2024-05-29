import { PluginSidebar } from '@wordpress/edit-post';
import { next } from '@wordpress/icons';
import { __ } from '@wordpress/i18n';
import { Modal } from '@wordpress/components';
import { useDispatch } from '@wordpress/data';

function UseFormButton() {
	const { closeGeneralSidebar } = useDispatch( 'core/edit-post' );

	return <PluginSidebar
		icon={ next }
		name="sidebar"
		title={ __( 'Use the form', 'jet-form-builder' ) }
	>
		<Modal
			title={ __( 'Use the form', 'jet-form-builder' ) }
			onRequestClose={ closeGeneralSidebar }
		>
			Some instructions
		</Modal>
	</PluginSidebar>;
}

export default UseFormButton;