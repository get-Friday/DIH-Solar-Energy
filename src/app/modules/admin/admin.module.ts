import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyComponent } from './energy/energy.component';
import { CardsComponent } from './cards/cards.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    DashboardComponent,
    EnergyComponent,
    CardsComponent,
    ChartComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    NgChartsModule
  ]
})
export class AdminModule { }
