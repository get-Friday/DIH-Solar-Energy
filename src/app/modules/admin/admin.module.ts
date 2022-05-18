import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { UnitsModule } from '../units/units.module';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyComponent } from './energy/energy.component';
import { AdminRountingModule } from './admin-routing.module';

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    MainComponent,
    EnergyComponent
  ],
  imports: [
    CommonModule,
    UnitsModule,
    MatIconModule,
    AdminRountingModule
  ]
})
export class AdminModule { }
