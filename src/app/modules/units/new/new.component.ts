import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'DIH-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(newUnit: NgForm) {
    console.log(newUnit.value)
    console.log(newUnit.valid)
  }

}
