import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

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

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
  }

  onSubmit(newUnit: NgForm) {
    let unitObject: IUnits = newUnit.value;
    unitObject = {
      id: Math.floor(Math.random() * 1000),
      ...unitObject
    }

    this.unitsService.addUnit(unitObject)
      .subscribe(arg => {
        console.log(arg)
      });
  }
}
