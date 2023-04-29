import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
})
export class ComponentsLayoutModule {}
