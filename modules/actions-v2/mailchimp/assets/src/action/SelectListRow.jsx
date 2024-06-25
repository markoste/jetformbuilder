import { useInstanceId } from '@wordpress/compose';
import {
	ControlWithErrorStyle, IconText,
	RequiredLabel,
	RowControl,
	RowControlEndStyle,
} from 'jet-form-builder-components';
import { __ } from '@wordpress/i18n';
import { Flex, SelectControl } from '@wordpress/components';
import { cx } from '@linaria/core';
import { useSelect } from '@wordpress/data';
import { STORE_NAME } from '../store';

const {
	      useActionValidatorProvider,
      } = JetFBHooks;

function SelectListRow( { settings, onChangeSettingObj } ) {
	const lists = useSelect( select => (
		select( STORE_NAME ).getLists()
	), [] );

	const { hasError, setShowError } = useActionValidatorProvider( {
		isSupported: error => 'list_id' === error?.property,
	} );

	const id = useInstanceId( RowControl, 'jfb-control' );

	return <RowControl createId={ false }>
		<RequiredLabel htmlFor={ id }>
			{ __( 'Audience', 'jet-form-builder' ) }
		</RequiredLabel>
		<Flex
			className={ cx(
				RowControlEndStyle,
				hasError && ControlWithErrorStyle,
			) }
			direction="column"
		>
			{ hasError && <IconText>
				{ __(
					'Please fill this required field',
					'jet-form-builder',
				) }
			</IconText> }
			<SelectControl
				id={ id }
				value={ settings.list_id }
				onChange={ list_id => onChangeSettingObj(
					{ list_id },
				) }
				onBlur={ () => setShowError( true ) }
				options={ [
					{
						value: '',
						label: __(
							'-- Select list / audience',
							'jet-form-builder',
						),
					},
					...lists,
				] }
				__next40pxDefaultSize
				__nextHasNoMarginBottom
			/>
		</Flex>
	</RowControl>;
}

export default SelectListRow;
