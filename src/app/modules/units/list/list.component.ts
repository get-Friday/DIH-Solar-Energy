import { Component, OnInit } from '@angular/core';

import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  unitList: IUnits[] = [];

  constructor(private unitsService: UnitsService) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.unitsService.getUnits().subscribe((result: IUnits[]) => {
      this.unitList = result;
    });
  }

  removeUnit(id: number) {
    this.unitsService.removeUnit(id).subscribe(() => {
      this.updateList();
    });
  }
}
