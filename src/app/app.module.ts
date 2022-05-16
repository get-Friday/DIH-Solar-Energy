import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NavComponent } from './components/nav/nav.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UnitsComponent } from './pages/units/units.component';
import { RegEnergyComponent } from './pages/reg-energy/reg-energy.component';
import { LoginComponent } from './pages/login/login.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'units',
    component: UnitsComponent,
  },
  {
    path: 'energy',
    component: RegEnergyComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    NavComponent,
    DashboardComponent,
    UnitsComponent,
    RegEnergyComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
