import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'ui-checkbox',
  imports : [CommonModule],
  standalone: true,
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})


export class CheckboxComponent {
  @Input() label: string = '';
  @Input() checked: boolean = false;

  // For multi-select: the key value and bound array of selections
  @Input() value: string = '';
  @Input() selectedValues: string[] = [];

  toggleSingle() {
    this.checked = !this.checked;
  }

  toggleMultiple() {
    const index = this.selectedValues.indexOf(this.value);
    if (index > -1) {
      this.selectedValues.splice(index, 1);
    } else {
      this.selectedValues.push(this.value);
    }
  }
}
