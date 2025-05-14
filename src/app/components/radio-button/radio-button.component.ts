

import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports : [CommonModule],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() selected: string = '';

  @Output() selectionChange = new EventEmitter<string>();

  onChange(value: string) {
    this.selected = value;
    this.selectionChange.emit(value);
  }
}
