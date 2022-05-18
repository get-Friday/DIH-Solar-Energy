import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnitsRountingModule } from './units-routing.module';

import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { NewComponent } from './new/new.component';

@NgModule({
  declarations: [
    MainComponent,
    ListComponent,
    NewComponent
  ],
  imports: [
    CommonModule,
    UnitsRountingModule
  ]
})
export class UnitsModule { }
