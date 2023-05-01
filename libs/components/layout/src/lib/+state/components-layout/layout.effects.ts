import { Injectable, inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, catchError, of } from 'rxjs';
import * as ComponentsActions from './layout.actions';
import * as ComponentsFeature from './layout.reducer';

@Injectable()
export class LayoutEffects {
  private actions$ = inject(Actions);

  init$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ComponentsActions.initComponents),
      switchMap(() =>
        of(ComponentsActions.loadComponentsSuccess({ components: [] }))
      ),
      catchError((error) => {
        console.error('Error', error);
        return of(ComponentsActions.loadComponentsFailure({ error }));
      })
    )
  );
}
