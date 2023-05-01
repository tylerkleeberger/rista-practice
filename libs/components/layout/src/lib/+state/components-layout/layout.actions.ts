import { createAction, props } from '@ngrx/store';
import { ComponentsEntity } from './layout.models';

export const initComponents = createAction('[Components Page] Init');

export const loadComponentsSuccess = createAction(
  '[Components/API] Load Components Success',
  props<{ components: ComponentsEntity[] }>()
);

export const loadComponentsFailure = createAction(
  '[Components/API] Load Components Failure',
  props<{ error: any }>()
);



//Sidenav Toggle Action
export const toggleSidenav = createAction(
  '[PAGE: Layout](Side Navigation Button) Clicked');

//Logout Action
export const logout = createAction(
  '[PAGE: Layout](Logout Button) Clicked');


