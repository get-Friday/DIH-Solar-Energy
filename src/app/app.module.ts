import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { AdminModule } from './modules/admin/admin.module';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginComponent } from './pages/login/login.component';

const ROUTES: Route[] = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'admin',
    loadChildren: () => import('./modules/admin/admin.module')
      .then((m) => m.AdminModule)
  }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    LoginComponent
  ],
  imports: [
    AdminModule,
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES),
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
