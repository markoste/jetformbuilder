/* eslint-disable import/no-extraneous-dependencies */
import {
	Label,
	RequiredLabel,
	RowControl,
	RowControlEnd,
} from 'jet-form-builder-components';
import { TextControl } from '@wordpress/components';
import useActionValidatorProvider from '../hooks/useActionValidatorProvider';

function ValidatedTextControl( {
	value,
	onChange,
	label,
	help,
	isErrorSupported = () => false,
	required = false,
} ) {

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: isErrorSupported,
	} );

	const LabelComponent = required ? RequiredLabel : Label;

	return <RowControl>
		{ ( { id } ) => <>
			<LabelComponent htmlFor={ id }>
				{ label }
			</LabelComponent>
			<RowControlEnd hasError={ hasError }>
				<TextControl
					id={ id }
					value={ value }
					onChange={ onChange }
					onBlur={ () => setShowError( true ) }
					help={ help }
					__next40pxDefaultSize
					__nextHasNoMarginBottom
				/>
			</RowControlEnd>
		</> }
	</RowControl>;
}

export default ValidatedTextControl;