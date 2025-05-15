

import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-toggle',
  standalone : true,
  imports : [],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;
  toggleId = 'toggle-' + Math.random().toString(36).substring(2); // unique ID
  @Output() changed = new EventEmitter<boolean>();

  toggle() {
    this.checked = !this.checked;
    this.changed.emit(this.checked);
  }
}
