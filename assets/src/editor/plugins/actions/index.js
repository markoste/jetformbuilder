import PluginActions from "./render";

const { __ } = wp.i18n;

const base = {
	name: 'jf-actions-panel',
	title: __( 'Post Submit Actions', 'jet-form-builder' )
};

const settings = {
	render: PluginActions,
	icon: null
};

export default {
	base,
	settings
};