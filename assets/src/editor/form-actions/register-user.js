import Tools from "../tools";
import ActionMessages from "../meta/action-messages";
import BaseActionComponent from "./base-action-component";

import WrapperRequiredControl from "../components/wrapper-required-control";

/**
 * Internal dependencies
 */
const {
	TextControl,
	ToggleControl,
	SelectControl,
	BaseControl
} = wp.components;

const { __ } = wp.i18n;

const {
	useState
} = wp.element;

window.jetFormDefaultActions = window.jetFormDefaultActions || {};

window.jetFormDefaultActions[ 'register_user' ] = class RegisterUserAction extends BaseActionComponent {

	constructor( props ) {
		super( props );

		this.data = window.jetFormRegisterUserData;
		this.userFields = Object.entries( this.data.userFields );

		this.fields = Tools.getFormFieldsBlocks();
		this.formFieldsList = Tools.getFormFieldsBlocksWithPlaceholder( '--' );
	}

	render() {

		const settings = this.props.settings;

		/* eslint-disable jsx-a11y/no-onchange */
		return ( <React.Fragment key="register_user">
			<BaseControl
				label={ this.data.labels.fields_map }
				key="user_fields_map"
			>
				<div className="jet-user-fields-map__list">
					<span
						className={ 'description-controls' }>{ __( 'Set form fields names to to get user data from', 'jet-form-builder' ) }</span>
					{ this.userFields.map( ( [value, data] ) => {

						return <WrapperRequiredControl
							field={ [value, data] }
						>
							<SelectControl
								className="full-width"
								key={ `form_fields_${ value }` }
								value={ this.getFieldDefault( value ) }
								options={ this.formFieldsList }
								onChange={ ( newValue ) => {
									this.onChangeFieldMap( newValue, value );
								} }
							/>
						</WrapperRequiredControl>;
					} ) }
				</div>
			</BaseControl>
			<SelectControl
				key="user_role_list"
				className="full-width"
				label={ this.data.labels.user_role }
				labelPosition="side"
				value={ settings.user_role }
				options={ this.data.userRoles }
				onChange={ ( newValue ) => {
					this.onChangeSetting( newValue, 'user_role' );
				} }
			/>
			<BaseControl
				label={ this.data.labels.user_meta }
				key='user_meta_list'
			>
				<div className='jet-user-meta-rows'>
					<span
						className={ 'description-controls' }>{ __( 'Set user meta fields to save appropriate form fields into', 'jet-form-builder' ) }</span>
					{ this.fields.map( ( { name }, index ) => {
						return <div
							className="jet-user-meta__row"
							key={ 'user_meta_' + name + index }
						>
							<TextControl
								key={ name + index }
								label={ name }
								value={ this.getFieldMeta( name ) }
								onChange={ newVal => {
									this.onChangeMetaFieldMap( newVal, name )
								} }
							/>
						</div>;
					} ) }
				</div>
			</BaseControl>
			<BaseControl
				label={ this.data.labels.log_in }
				key='is_log_in'
			>
				<div className="log-in-control">
					<ToggleControl
						key='log_in'
						checked={ settings.log_in }
						onChange={ ( newValue ) => {
							this.onChangeSetting( newValue, 'log_in' );
						} }
					/>
				</div>

			</BaseControl>
			<BaseControl
				label={ this.data.labels.add_user_id }
				key='add_user_id'
			>
				<div className="add-user-id-control">
					<ToggleControl
						key='add_user_id_control'
						checked={ settings.add_user_id }
						onChange={ ( newValue ) => {
							this.onChangeSetting( newValue, 'add_user_id' );
						} }
						help={ Tools.getHelpMessage( this.data, 'add_user_id' ) }
					/>
				</div>
			</BaseControl>
			<ActionMessages
				localizedData={ this.data }
				{ ...this.props }
			/>
		</React.Fragment> );
		/* eslint-enable jsx-a11y/no-onchange */
	}

}
