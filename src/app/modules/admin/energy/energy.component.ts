import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import IEnergy from 'src/app/models/energy.model';
import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.scss'],
})
export class EnergyComponent implements OnInit, IEnergy {
  activeList: IUnits[] = [];
  id: number;
  unitId: number;
  date: string;
  generatedKw: number;

  constructor(private unitsService: UnitsService) {}

  ngOnInit(): void {
    this.unitsService.getUnits().subscribe((arg) => {
      const activeUnits = arg.filter((unit) => unit.active == true);
      this.activeList = activeUnits;
      this.unitId = activeUnits[0].id;
    });
  }

  onSubmit(registerEnergy: NgForm) {
    console.log(registerEnergy);
  }
}
