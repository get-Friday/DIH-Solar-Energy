import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import IUnits from 'src/app/models/units.model';

@Component({
  selector: 'DIH-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NewComponent implements OnInit, IUnits {
  id: number;
  alias: string;
  located: string;
  brand: string;
  model: number;
  active: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(newUnit: NgForm) {
    console.log(newUnit.value)
  }

}
