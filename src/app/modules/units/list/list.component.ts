import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import IUnits from 'src/app/models/units.model';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  unitList: IUnits[] = [];

  constructor(private unitsService: UnitsService, private route: Router) {}

  ngOnInit(): void {
    this.updateList();
  }

  updateList() {
    this.unitsService.getUnits().subscribe((result: IUnits[]) => {
      this.unitList = result;
    });
  }

  remove(id: number) {
    this.unitsService.removeUnit(id).subscribe(() => {
      this.updateList();
    });
  }

  edit(id: number) {
    this.route.navigate(['admin', 'units', 'edit', id]);
  }
}
