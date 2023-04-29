import {Route} from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'app',
    loadChildren: () => import('~rista/pages/layout').then(m => m.PagesLayoutModule),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'app',
  },
];
