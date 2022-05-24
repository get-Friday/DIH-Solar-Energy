import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { NgChartsModule } from 'ng2-charts';

import { AdminComponent } from './admin.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyEntryComponent } from './energy-entry/energy-entry.component';
import { CardsComponent } from './cards/cards.component';
import { ChartComponent } from './chart/chart.component';

@NgModule({
  declarations: [
    AdminComponent,
    NavComponent,
    DashboardComponent,
    EnergyEntryComponent,
    CardsComponent,
    ChartComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatIconModule,
    FormsModule,
    NgChartsModule,
  ],
})
export class AdminModule {}
