import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'rista-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToolbarComponent {
  @Input() isAuthenticated!: boolean;
  @Input() title!: string;

  @Output() loggedOut = new EventEmitter();
  @Output() sidenavToggled = new EventEmitter();



}
