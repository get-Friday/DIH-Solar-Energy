import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component'
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component'

const ROUTES: Route[] = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'new',
        component: NewComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
  ]
})
export class UnitsModule { }
