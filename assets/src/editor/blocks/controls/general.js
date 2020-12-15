import JetFormPresetEditor from '../controls/preset-editor';
import FieldWithPreset from "../../components/field-with-preset";

/**
 * WordPress dependencies
 */
const { withInstanceId } = window.wp.compose;

/**
 * Internal dependencies
 */
const {
	TextControl,
	PanelBody,
	G,
	Path,
	Circle,
	Rect,
	SVG,
	Modal,
	Button,
	ButtonGroup
} = wp.components;

const { __ } = wp.i18n;

const JetFormGeneral = class extends wp.element.Component {

	render() {
		const result = {};
		const onChangeValue = ( value, key ) => {
			result[ key ] = value;
			this.props.onChange( result );
		};

		for ( var i = 0; i < this.props.controls.length; i ++ ) {
			result[ this.props.controls[ i ].key ] = this.props.values[ this.props.controls[ i ].key ];
		}

		/* eslint-disable jsx-a11y/no-onchange */
		return <PanelBody title={ __( 'General' ) } key={ 'test-general-key' }>
			{ this.props.controls.map( ( data, index ) => {
				if ( ! data.show ) {
					return null;
				}
				switch ( data.type ) {
					case 'text':
						return <TextControl
							key={ data.key }
							label={ data.label }
							value={ result[ data.key ] }
							onChange={ newVal => {
								onChangeValue( newVal, data.key )
							} }
						/>;
					case 'dynamic_text':
						return <FieldWithPreset
							ModalEditor={ ( { actionClick, onRequestClose } ) => <JetFormPresetEditor
								value={ result[ data.key ] }
								isSaveAction={ actionClick }
								onSavePreset={ newVal => {
									onChangeValue( newVal, data.key )
								} }
								onUnMount={ onRequestClose }
								availableFields={ false }
							/> }
						>
							<TextControl
								key={ data.key }
								label={ data.label }
								help={ data.help ? data.help : '' }
								value={ result[ data.key ] }
								onChange={ newVal => {
									onChangeValue( newVal, data.key )
								} }
							/>
						</FieldWithPreset>;
				}
			} ) }
		</PanelBody>
		/* eslint-enable jsx-a11y/no-onchange */
	}
}

window.jetFormBuilderControlComponents = {
	...window.jetFormBuilderControlComponents,
	JetFormGeneral
};

export default withInstanceId( JetFormGeneral );