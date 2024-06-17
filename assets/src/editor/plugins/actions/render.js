import EditSettingsModal from './edit.settings.modal';
import EditConditionsModal from './edit.conditions.modal';
import {
	Flex,
	withFilters,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { PluginDocumentSettingPanel } from '@wordpress/edit-post';
import { Sortable } from 'jet-form-builder-components';
import { Fragment } from '@wordpress/element';
import { styled } from '@linaria/react';

const {
	      ActionsAfterNewButtonSlotFill,
	      ActionListItemContext,
	      ListActionItem,
	      AllProActionsLink,
	      AddActionButton,
      } = JetFBComponents;
const {
	      useActions,
      } = JetFBHooks;

const ListActionItemFiltered = withFilters( 'jet.fb.action.item' )(
	ListActionItem,
);

const FlexSortable = styled( Sortable )`
    display: flex;
    flex-direction: column;
    gap: 12px;

    .sortable-chosen {
        box-shadow: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9)) 0 1px 4px;
    }
`;

const ActionsPanel = styled( PluginDocumentSettingPanel )`
    border: 1px solid var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
    margin-bottom: 1px;

    .components-panel__body-title {
        background-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));

        .components-button {
            color: var(--wp-components-color-accent-inverted, #fff);
        }
    }

    &.is-opened {
        background-color: rgba(var(--wp-admin-theme-color--rgb), .07);

        .components-panel__body-title {
            background-color: transparent;

            .components-button {
                color: #1e1e1e;
            }

        }
    }

    .components-panel__body-title:hover {
        background-color: var(--wp-components-color-accent, var(--wp-admin-theme-color, #3858e9));
        opacity: 0.7;
    }
`;

function PluginActions() {
	const [ actions, setActions ] = useActions();

	return <ActionsPanel
		title={ __( 'Post Submit Actions', 'jet-form-builder' ) }
	>
		<Flex direction="column" gap={ 3 }>
			<FlexSortable
				list={ actions }
				setList={ setActions }
				direction="vertical"
				handle=".jfb-action-handle"
				draggable=".jet-form-action.draggable"
			>
				{ actions.map( ( action, index ) => <Fragment key={ action.id }>
						<ActionListItemContext.Provider
							value={ { index, action } }
						>
							<ListActionItemFiltered/>
						</ActionListItemContext.Provider>
					</Fragment>,
				) }
			</FlexSortable>
			<ActionsAfterNewButtonSlotFill.Slot>
				{ fills => <Flex wrap className="jfb-actions-panel--buttons">
					<AddActionButton/>
					{ fills }
				</Flex> }
			</ActionsAfterNewButtonSlotFill.Slot>
		</Flex>
		<AllProActionsLink/>
		<EditSettingsModal/>
		<EditConditionsModal/>
	</ActionsPanel>;
}

export default PluginActions;