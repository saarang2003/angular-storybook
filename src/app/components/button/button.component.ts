import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <button
      [disabled]="disabled || loading"
      [ngClass]="[
        variant,
        disabled ? 'disabled' : '',
        loading ? 'loading' : ''
      ]"
       (click)="handleClick()"
    >
      <ng-container *ngIf="loading; else labelTpl">
        <span class="loader"></span>
      </ng-container>
      <ng-template #labelTpl>{{ label }}</ng-template>
    </button>
  `,
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
  @Input() label = 'Button';
  @Input() variant: 'primary' | 'secondary' | 'danger' = 'primary';
  @Input() loading = false;
  @Input() disabled = false;

 @Output() action = new EventEmitter<void>();

   handleClick() {
    if (!this.disabled && !this.loading) {
      this.action.emit(); // Emit the action event
    }
  }
}
