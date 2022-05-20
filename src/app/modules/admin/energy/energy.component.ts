import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import IEnergy from 'src/app/models/energy.model';
import IUnits from 'src/app/models/units.model';

import { EnergyService } from 'src/app/services/energy.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss'],
})
export class EnergyComponent implements OnInit {
  activeList: IUnits[] = [];
  model: IEnergy = {
    id: 0,
    date: '',
    generatedKw: 0,
    unit: 0,
  };

  constructor(
    private unitsService: UnitsService,
    private energyService: EnergyService
  ) {}

  ngOnInit(): void {
    this.unitsService.getUnits().subscribe((arg) => {
      const activeUnits = arg.filter((unit) => unit.active == true);
      this.activeList = activeUnits;
      this.model.unit = activeUnits[0].id;
    });
  }

  onSubmit(registerEnergy: NgForm) {
    let energyPackage: IEnergy = registerEnergy.value;

    energyPackage = {
      id: Math.floor(Math.random() * 10000),
      ...energyPackage,
    };

    this.energyService.addEnergy(energyPackage).subscribe(() => {});
  }
}
