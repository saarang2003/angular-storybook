import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf } from '@angular/common';
import { ButtonComponent } from "../button/button.component";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgIf, ButtonComponent],
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
