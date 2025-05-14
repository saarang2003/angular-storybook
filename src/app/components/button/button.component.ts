import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule], 
  template: `
    <button
  [disabled]="disabled || loading"
  [attr.aria-disabled]="disabled || loading"
  [attr.aria-label]="loading ? 'Loading...' : label"
  [ngClass]="[
    variant,
    size,
    disabled ? 'disabled' : '',
    loading ? 'loading' : ''
  ]"
  (click)="handleClick()"
>
  <ng-container *ngIf="loading; else labelTpl">
    <span class="loader" role="status" aria-live="polite"></span>
  </ng-container>
  <ng-template #labelTpl>
    <span>{{ label }}</span>
  </ng-template>
</button>
  `,
  styleUrls: ['./button.component.css']
})

export class ButtonComponent {
@Input() label = 'Button';
@Input() variant: 'primary' | 'secondary' | 'danger' | 'outline' = 'primary';
@Input() loading = false;
@Input() disabled = false;
@Input() size: 'small' | 'medium' | 'large' = 'medium'; // NEW
@Output() action = new EventEmitter<void>();

handleClick() {
  if (!this.disabled && !this.loading) {
    this.action.emit();
  }
}

}
