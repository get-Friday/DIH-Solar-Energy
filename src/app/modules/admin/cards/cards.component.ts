import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'DIH-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() title: string;
  @Input() value: number;

  constructor() { }

  ngOnInit(): void {
  }

}
