import { Meta, StoryObj } from '@storybook/angular';
import { ModalComponent } from './modal.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-modal-wrapper',
  standalone: true,
  imports: [ModalComponent],
  template: `
    <button (click)="isOpen = true">Open Modal</button>
    <app-modal [isOpen]="isOpen" title="Ei Modal" (close)="isOpen = false">
      <p>This is a EI modal</p>
    </app-modal>
  `,
})

class ModalWrapperComponent {
  isOpen = false;
}

const meta: Meta<ModalWrapperComponent> = {
  title: 'Components/secondary/Modal',
  component: ModalWrapperComponent,
  tags: ['autodocs'],
};

export default meta;

export const Default: StoryObj<ModalWrapperComponent> = {};
