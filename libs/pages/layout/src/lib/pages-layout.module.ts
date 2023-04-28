import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { pagesLayoutRoutes } from './lib.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pagesLayoutRoutes),
    RouterModule.forChild(pagesLayoutRoutes),
  ],
})
export class PagesLayoutModule {}
