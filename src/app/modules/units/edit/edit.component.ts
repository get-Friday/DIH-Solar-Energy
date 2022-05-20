import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UnitsService } from 'src/app/services/units.service';

@Component({
  selector: 'DIH-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  id: number;

  constructor(private route: ActivatedRoute, private unitsService: UnitsService) { }

  ngOnInit(): void {
    this.route.params.subscribe(param => {
      this.id = param['id']
    })
  }

}
