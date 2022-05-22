import { Component, OnInit } from '@angular/core';
import { EnergyService } from 'src/app/services/energy.service';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  unitsTotal: number = 0;
  activeUnits: number = 0;
  inactiveUnits: number = 0;
  averageEnergy: number = 0;

  constructor(
    private unitsService: UnitsService,
    private energyService: EnergyService
  ) {}

  ngOnInit(): void {
    this.unitsService.getUnits().subscribe((arg) => {
      this.unitsTotal = arg.length;
      this.activeUnits = arg.filter((unit) => unit.active).length;
      this.inactiveUnits = this.unitsTotal - this.activeUnits;

      this.energyService.getEnergy().subscribe((arg) => {
        const totalEnergy: number = arg.reduce(
          (subtotal, item) => subtotal + item.totalKw,
          0
        );
        this.averageEnergy = totalEnergy / this.activeUnits
      });
    });
  }
}
