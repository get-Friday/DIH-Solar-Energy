import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'dih-unit-form',
  templateUrl: './unit-form.component.html',
  styleUrls: ['./unit-form.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class UnitFormComponent implements OnInit {
  model: IUnits = {
    id: 0,
    alias: '',
    location: '',
    brand: '',
    active: false,
  };
  @Input() action: string;
  @Input() editId?: number;

  constructor(private unitsService: UnitsService, private route: Router) {}

  ngOnInit(): void {
    if (this.editId) {
      this.unitsService
        .toEdit(this.editId)
        .subscribe((unit) => (this.model = unit));
    }
  }

  onSubmit(newUnit: NgForm, action: string) {
    if (action == 'new') {
      let formObj: IUnits = newUnit.value;
      formObj = {
        id: Math.floor(Math.random() * 1000),
        ...formObj,
      };

      this.unitsService.addUnit(formObj).subscribe(() => {
        newUnit.reset();
      });
    }

    if (action == 'edit') {
      this.unitsService.editUnit(this.model.id, this.model).subscribe(() => {
        this.route.navigate(['admin', 'units']);
      });
    }
  }
}
