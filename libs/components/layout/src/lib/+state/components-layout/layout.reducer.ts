import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';

import * as ComponentsActions from './layout.actions';
import { ComponentsEntity } from './layout.models';

export const COMPONENTS_FEATURE_KEY = 'components';

export interface ComponentsState extends EntityState<ComponentsEntity> {
  selectedId?: string | number; // which Components record has been selected
  loaded: boolean; // has the Components list been loaded
  error?: string | null; // last known error (if any)
}

export interface ComponentsPartialState {
  readonly [COMPONENTS_FEATURE_KEY]: ComponentsState;
}

export const componentsAdapter: EntityAdapter<ComponentsEntity> =
  createEntityAdapter<ComponentsEntity>();

export const initialComponentsState: ComponentsState =
  componentsAdapter.getInitialState({
    // set initial required properties
    loaded: false,
  });

const reducer = createReducer(
  initialComponentsState,
  on(ComponentsActions.initComponents, (state) => ({
    ...state,
    loaded: false,
    error: null,
  })),
  on(ComponentsActions.loadComponentsSuccess, (state, { components }) =>
    componentsAdapter.setAll(components, { ...state, loaded: true })
  ),
  on(ComponentsActions.loadComponentsFailure, (state, { error }) => ({
    ...state,
    error,
  }))
);

export function layoutReducer(
  state: ComponentsState | undefined,
  action: Action
) {
  return reducer(state, action);
}
