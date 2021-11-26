import GatewaysEditor from '../../gateways/gateways-editor';

const { __ } = wp.i18n;

const {
	RadioControl,
	Button,
} = wp.components;

const {
	withDispatch,
	withSelect,
} = wp.data;

const {
	useState,
	useEffect,
} = wp.element;

const { compose } = wp.compose;

const { ActionModal } = JetFBComponents;

const {
	withDispatchMeta,
	withSelectMeta,
	withDispatchGateways,
	withSelectGateways,
} = JetFBHooks;

const gatewaysData = window.JetFormEditorData.gateways;

const getGatewayLabel = ( type ) => {
	return (
		gatewaysData.list.find( el => el.value === type ).label
	);
};


function PluginGateways( {
	_jf_gateways: GatewaysMeta,
	_jf_actions: ActionsMeta,
	ChangeGateway,
	setGateway,
	setGatewayScenario,
	clearGateway,
	clearScenario,
	gatewayGeneral,
	gatewayScenario,
} ) {

	const [ isEdit, setEdit ] = useState( false );

	useEffect( () => {
		if ( isEdit ) {
			setGateway( GatewaysMeta );
			setGatewayScenario( GatewaysMeta[ GatewaysMeta.gateway ]?.scenario );
		} else {
			clearGateway();
			clearScenario();
		}
	}, [ isEdit ] );

	const closeModal = ( newMeta = false ) => {
		if ( false !== newMeta ) {
			ChangeGateway( newMeta );
		}
		setEdit( false );
	};

	const issetActionType = type => {
		return Boolean( ActionsMeta.find( action => type === action.type ) );
	};

	const isDisabled = ! issetActionType( 'insert_post' );

	return <>
		<RadioControl
			key={ 'gateways_radio_control' }
			selected={ GatewaysMeta.gateway }
			options={ [
				{ label: 'None', value: 'none' },
				...gatewaysData.list,
			] }
			onChange={ val => {
				ChangeGateway( {
					...GatewaysMeta,
					gateway: val,
				} );
			} }
		/>
		{ (
		  GatewaysMeta.gateway && 'none' !== GatewaysMeta.gateway
		  ) && <>
			  <Button
				  onClick={ () => setEdit( true ) }
				  icon={ 'admin-tools' }
				  style={ {
					  margin: '1em 0',
				  } }
				  isSecondary
				  disabled={ isDisabled }
			  >
				  { __( 'Edit' ) }
			  </Button>
			  { isDisabled && <p>{ __( 'Please add \`Insert/Update Post\` action', 'jet-form-builder' ) }</p> }
		  </> }
		{ isEdit && (
			<ActionModal
				classNames={ [ 'width-60' ] }
				onRequestClose={ () => closeModal() }
				onCancelClick={ () => closeModal() }
				onUpdateClick={ () => closeModal( {
					...gatewayGeneral,
					[ gatewayGeneral.gateway ]: {
						...(
							gatewayGeneral[ gatewayGeneral.gateway ] || {}
						),
						scenario: gatewayScenario,
					},
				} ) }
				title={ `Edit ${ getGatewayLabel( GatewaysMeta.gateway ) } Settings` }
			>
				<GatewaysEditor/>
			</ActionModal>
		) }
	</>;
}


export default compose(
	withDispatch( ( ...props ) => (
		{
			...withDispatchMeta( '_jf_gateways', 'ChangeGateway' )( ...props ),
			...withDispatchGateways( ...props ),
		}
	) ),
	withSelect( ( ...props ) => (
		{
			...withSelectGateways( ...props ),
			...withSelectMeta( '_jf_gateways' )( ...props ),
			...withSelectMeta( '_jf_actions' )( ...props ),

		}
	) ),
)( PluginGateways );
