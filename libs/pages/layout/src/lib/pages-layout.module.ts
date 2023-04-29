import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesLayoutRoutes } from './lib.routes';
import { LayoutPage } from './layout/layout.page';
import {ComponentsLayoutModule} from '~rista/components/layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesLayoutRoutes),
    ComponentsLayoutModule,
  ],
  declarations: [LayoutPage],
})
export class PagesLayoutModule {}
