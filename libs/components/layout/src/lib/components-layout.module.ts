import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromComponents from './+state/components-layout/layout.reducer';
import { LayoutEffects } from './+state/components-layout/layout.effects';
import { LayoutFacade } from './+state/components-layout/layout.facade';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {RouterLink, RouterLinkActive} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    StoreModule.forFeature(
      fromComponents.COMPONENTS_FEATURE_KEY,
      fromComponents.layoutReducer,
    ),
    EffectsModule.forFeature([LayoutEffects]),
    MatSidenavModule,
    MatListModule,
    RouterLinkActive,
    RouterLink,
  ],
  declarations: [ToolbarComponent, SidenavComponent],
  exports: [ToolbarComponent, SidenavComponent],
  providers: [LayoutFacade],
})
export class ComponentsLayoutModule {}
