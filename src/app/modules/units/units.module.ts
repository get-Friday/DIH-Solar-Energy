import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UnitsRoutingModule } from './units-routing.module';
import { UnitsComponent } from './units.component';
import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';


@NgModule({
  declarations: [
    UnitsComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    UnitsRoutingModule
  ]
})
export class UnitsModule { }
