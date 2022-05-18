import { Component, OnInit } from '@angular/core';

import IUnits from 'src/app/models/units.model';

@Component({
  selector: 'DIH-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  unitList: IUnits[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
