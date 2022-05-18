import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import IUnits from '../models/units.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http: HttpClient) { }

  getUnits(){
    this.http
      .get<IUnits[]>("http://localhost:3000/units")
      .subscribe((value: IUnits[]) => {
        return value
      })
  }
}
