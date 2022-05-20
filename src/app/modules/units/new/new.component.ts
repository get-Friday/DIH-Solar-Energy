import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NewComponent implements OnInit {
  model: IUnits = {
    id: 0,
    alias: '',
    located: '',
    brand: '',
    active: false,
  };

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {}

  onSubmit(newUnit: NgForm) {
    let formObj: IUnits = newUnit.value;

    formObj = {
      id: Math.floor(Math.random() * 1000),
      ...formObj,
    };

    this.unitsService.addUnit(formObj).subscribe(() => {
      this.resetForm();
    });
  }

  resetForm() {
    this.model = {
      id: 0,
      alias: '',
      located: '',
      brand: '',
      active: false,
    };
  }
}
