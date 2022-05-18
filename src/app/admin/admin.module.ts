import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

import { MainComponent } from './main/main.component';
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';

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
      }
    ]
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    NavComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    MatIconModule
  ]
})
export class AdminModule { }
