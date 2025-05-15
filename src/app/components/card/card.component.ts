import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent {
  @Input() imageSrc: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';

  @Output() action = new EventEmitter<void>();

  handleClick() {
    this.action.emit();
}
}
