import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {logout, toggleSidenav} from '~rista/components/layout';

@Component({
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {

  constructor(
    private readonly store: Store,
  ) {}

  // void means cannot return anything
  toggledSidenav():void {
    this.store.dispatch(toggleSidenav());
  }

  loggedOut():void {
    this.store.dispatch(logout());
  }

// create isAuthenticated observable stream and set it to true using store
  isAuthenticated$ = of(true);




}
