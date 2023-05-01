import { Injectable, inject } from '@angular/core';
import { select, Store, Action } from '@ngrx/store';

import * as ComponentsActions from './layout.actions';
import * as ComponentsFeature from './layout.reducer';
import * as ComponentsSelectors from './layout.selectors';

@Injectable()
export class LayoutFacade {
  private readonly store = inject(Store);

  /**
   * Combine pieces of state using createSelector,
   * and expose them as observables through the facade.
   */
  loaded$ = this.store.pipe(select(ComponentsSelectors.selectComponentsLoaded));
  allComponents$ = this.store.pipe(
    select(ComponentsSelectors.selectAllComponents)
  );
  selectedComponents$ = this.store.pipe(
    select(ComponentsSelectors.selectEntity)
  );

  /**
   * Use the initialization action to perform one
   * or more tasks in your Effects.
   */
  init() {
    this.store.dispatch(ComponentsActions.initComponents());
  }
}
