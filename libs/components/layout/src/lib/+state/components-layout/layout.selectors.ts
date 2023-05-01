import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  COMPONENTS_FEATURE_KEY,
  ComponentsState,
  componentsAdapter,
} from './layout.reducer';

// Lookup the 'Components' feature state managed by NgRx
export const selectComponentsState = createFeatureSelector<ComponentsState>(
  COMPONENTS_FEATURE_KEY
);

const { selectAll, selectEntities } = componentsAdapter.getSelectors();

export const selectComponentsLoaded = createSelector(
  selectComponentsState,
  (state: ComponentsState) => state.loaded
);

export const selectComponentsError = createSelector(
  selectComponentsState,
  (state: ComponentsState) => state.error
);

export const selectAllComponents = createSelector(
  selectComponentsState,
  (state: ComponentsState) => selectAll(state)
);

export const selectComponentsEntities = createSelector(
  selectComponentsState,
  (state: ComponentsState) => selectEntities(state)
);

export const selectSelectedId = createSelector(
  selectComponentsState,
  (state: ComponentsState) => state.selectedId
);

export const selectEntity = createSelector(
  selectComponentsEntities,
  selectSelectedId,
  (entities, selectedId) => (selectedId ? entities[selectedId] : undefined)
);
