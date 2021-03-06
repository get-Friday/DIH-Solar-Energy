import { Component, Input } from '@angular/core';

@Component({
  selector: 'dih-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardsComponent{
  @Input() title: string;
  @Input() value: number | string;

  constructor() {}
}
