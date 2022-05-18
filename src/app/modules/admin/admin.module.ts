import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { UnitsModule } from '../units/units.module';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EnergyComponent } from './energy/energy.component';

const ROUTES: Route[] = [
  {
    path: 'admin',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'units',
        loadChildren: () => import('../units/units.module')
          .then((m) => m.UnitsModule)
      },
      {
        path: 'energy',
        component: EnergyComponent
      }
    ]
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    MainComponent,
    EnergyComponent,
  ],
  imports: [
    CommonModule,
    UnitsModule,
    RouterModule.forChild(ROUTES),
    MatIconModule,
  ]
})
export class AdminModule { }
