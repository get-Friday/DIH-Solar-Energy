import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IUnits from '../models/units.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {
  private url: string = 'http://localhost:3000/units/';

  constructor(private http: HttpClient) { }

  getUnits(): Observable<IUnits[]> {
    return this.http.get<IUnits[]>(this.url)
  }

  toEdit(id: number): Observable<IUnits> {
    return this.http.get<IUnits>(this.url + id)
  }

  addUnit(unit: IUnits): Observable<IUnits> {
    return this.http.post<IUnits>(this.url, unit)
  }

  removeUnit(id: number): Observable<number> {
    return this.http.delete<number>(this.url + id)
  }

  editUnit(id: number, body: IUnits): Observable<IUnits> {
    return this.http.put<IUnits>(this.url + id, body)
  }
}
