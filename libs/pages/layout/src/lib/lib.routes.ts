import { Route } from '@angular/router';
import {LayoutPage} from './layout/layout.page';

export const pagesLayoutRoutes: Route[] = [
  {path: '', pathMatch: 'full', component: LayoutPage}
];
