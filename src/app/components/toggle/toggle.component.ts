

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  @Output() changed = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
