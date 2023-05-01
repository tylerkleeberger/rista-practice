import { Component } from '@angular/core';
import {Store} from '@ngrx/store';
import {of} from 'rxjs';
import {logout, toggleSidenav} from '~rista/components/layout';

@Component({
  templateUrl: './layout.page.html',
  styleUrls: ['./layout.page.scss'],
})
export class LayoutPage {

  links = [
    { path: '/home', icon: 'home', title: 'Home' },
    { path: '/items', icon: 'view_list', title: 'Items' },
    { path: '/', icon: 'person', title: 'Login' },
    { path: '/sign-up', icon: 'person_add', title: 'Sign Up' },
  ];

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
