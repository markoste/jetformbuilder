import { hiddenValues } from "./options";

const { __ } = wp.i18n;

const {
		  GeneralFields,
		  AdvancedFields,
		  FieldSettingsWrapper,
	  } = JetFBComponents;

const { getConvertedName } = JetFBActions;

const {
		  InspectorControls,
		  useBlockProps,
		  RichText,
	  } = wp.blockEditor ? wp.blockEditor : wp.editor;

const {
		  TextControl,
		  SelectControl,
		  PanelBody,
		  Card,
		  CardHeader,
		  CardBody,
		  BaseControl,
	  } = wp.components;

export default function HiddenEdit( props ) {

	const {
			  attributes,
			  setAttributes,
			  isSelected,
			  editProps: { uniqKey },
		  } = props;

	const blockProps = useBlockProps();

	const setDynamicName = newValue => {
		if ( newValue
			&& ( ! attributes.name || 'hidden_field_name' === attributes.name )
		) {
			setAttributes( { name: newValue } )
		}
	};

	const checkFieldValueInput = () => <>
		<SelectControl
			key='field_value'
			label="Field Value"
			labelPosition="top"
			value={ attributes.field_value }
			onChange={ newValue => {
				setAttributes( { field_value: newValue } );
				setDynamicName( newValue )
			} }
			options={ hiddenValues }
		/>
		{ [ 'post_meta', 'user_meta' ].includes( attributes.field_value ) && <TextControl
			key="hidden_value_field"
			label="Meta Field to Get Value From"
			value={ attributes.hidden_value_field }
			onChange={ newValue => {
				setAttributes( { hidden_value_field: newValue } );
			} }
		/> }
		{ 'query_var' === attributes.field_value && <TextControl
			key="query_var_key"
			label="Query Variable Key"
			value={ attributes.query_var_key }
			onChange={ newValue => {
				setAttributes( { query_var_key: newValue } );
			} }
		/> }
		{ 'current_date' === attributes.field_value && <TextControl
			key="date_format"
			label="Format"
			value={ attributes.date_format }
			onChange={ newValue => {
				setAttributes( { date_format: newValue } );
			} }
		/> }
		{ 'manual_input' === attributes.field_value && <TextControl
			key="hidden_value"
			label="Value"
			value={ attributes.hidden_value }
			onChange={ newValue => {
				setAttributes( { hidden_value: newValue } );
			} }
		/> }
	</>;

	const { label = 'Please set `Field Value`' } = hiddenValues.find( option => option.value === attributes.field_value );
	const resultLabel = [ label ];

	switch ( attributes.field_value ) {
		case 'post_meta':
		case 'user_meta':
			resultLabel.push( attributes.hidden_value_field );
			break;
		case 'query_var':
			resultLabel.push( attributes.query_var_key );
			break;
		case 'current_date':
			resultLabel.push( attributes.date_format );
			break;
		case 'manual_input':
			resultLabel.push( attributes.hidden_value );
			break;
	}

	return [
		isSelected && (
			<InspectorControls
				key={ uniqKey( 'InspectorControls' ) }
			>
				<GeneralFields
					key={ uniqKey( 'GeneralFields' ) }
					{ ...props }
				/>
				<FieldSettingsWrapper { ...props }>
					{ checkFieldValueInput() }
				</FieldSettingsWrapper>
				<AdvancedFields
					key={ uniqKey( 'AdvancedFields' ) }
					{ ...props }
				/>
			</InspectorControls>
		),
		<div { ...blockProps } key={ uniqKey( 'viewBlock' ) }>
			<Card isElevated>
				<CardHeader>
					<RichText
						placeholder='hidden_field_name...'
						allowedFormats={ [] }
						value={ attributes.name }
						onChange={ name => setAttributes( { name } ) }
					/>
				</CardHeader>
				<CardBody>
					{ isSelected && checkFieldValueInput() }
					{ ! isSelected && resultLabel.join( ': ' ) }
				</CardBody>
			</Card>
		</div>,
	];
};
