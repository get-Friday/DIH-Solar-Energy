import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import IGeneratedEnergy from 'src/app/models/generated-energy.model';
import IUnits from 'src/app/models/units.model';

import { GenerationsService } from 'src/app/services/generations.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'dih-energy',
  templateUrl: './energy-entry.component.html',
  styleUrls: ['./energy-entry.component.scss'],
})
export class EnergyEntryComponent implements OnInit {
  activeList: IUnits[] = [];
  model: IGeneratedEnergy = {
    id: 0,
    date: '',
    totalKw: 0,
    unit: 0,
  };

  constructor(
    private unitsService: UnitsService,
    private generationsService: GenerationsService
  ) {}

  ngOnInit(): void {
    this.unitsService.getUnits().subscribe((arg) => {
      const activeUnits = arg.filter((unit) => unit.active);
      this.activeList = activeUnits;
      this.model.unit = activeUnits[0].id;
    });
  }

  onSubmit(registerEnergy: NgForm) {
    let energyEntry: IGeneratedEnergy = registerEnergy.value;

    energyEntry = {
      id: Math.floor(Math.random() * 10000),
      ...energyEntry,
    };

    this.generationsService.addEnergy(energyEntry).subscribe(() => {
      registerEnergy.reset();
    });
  }
}
