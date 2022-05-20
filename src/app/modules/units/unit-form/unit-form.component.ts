import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss']
})
export class UnitFormComponent implements OnInit {
  model: IUnits = {
    id: 0,
    alias: '',
    located: '',
    brand: '',
    active: false,
  };
  @Input() action: string;

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
  }

  onSubmit(newUnit: NgForm, action: string) {
    let formObj: IUnits = newUnit.value;

    switch(action){
      case 'new':
        formObj = {
          id: Math.floor(Math.random() * 1000),
          ...formObj,
        };

        this.unitsService.addUnit(formObj).subscribe(() => {
          this.resetForm();
        });
        break
      case 'edit':

        break
    }

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
