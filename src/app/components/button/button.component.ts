import { Component, EventEmitter, Input, NgModule, Output } from '@angular/core';
import {  NgClass, NgIf, NgStyle } from '@angular/common';    // faster compilation and smaller bundle

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [NgClass , NgIf , NgStyle], 
  template: `
    <button
  [disabled]="disabled || loading"
  [attr.aria-disabled]="disabled || loading"
  [attr.aria-label]="loading ? 'Loading...' : label"
  [ngStyle] = "{ width: width }"
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
@Input() width :string = '100px';
@Output() action = new EventEmitter<void>();

handleClick() {
  if (!this.disabled && !this.loading) {
    this.action.emit();
  }
}

}
