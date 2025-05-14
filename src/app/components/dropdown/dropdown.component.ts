import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ui-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css'],
})

export class DropdownComponent {
  @Input() label: string = '';
  @Input() options: string[] = [];
  @Input() selected: string = '';
  @Input() placeholder: string = 'Select an option';
}
