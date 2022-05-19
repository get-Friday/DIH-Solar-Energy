import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss']
})
export class EnergyComponent implements OnInit {
  unitsList: IUnits[] = []

  constructor(private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.unitsService.getUnits()
      .subscribe(arg => this.unitsList = arg);
  }

  onSubmit(registerEnergy: NgForm) {
  }

}
