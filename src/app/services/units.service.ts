import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IUnits from '../models/units.model';

@Injectable({
  providedIn: 'root'
})
export class UnitsService {

  constructor(private http: HttpClient) { }

  getUnits(): Observable<IUnits[]> {
    return this.http.get<IUnits[]>('http://localhost:3000/units')
  }

  toEdit(id: number): Observable<IUnits> {
    return this.http.get<IUnits>(`http://localhost:3000/units/${id}`)
  }

  addUnit(unit: IUnits): Observable<IUnits> {
    return this.http.post<IUnits>('http://localhost:3000/units', unit)
  }

  removeUnit(id: number): Observable<number> {
    return this.http.delete<number>(`http://localhost:3000/units/${id}`)
  }

  editUnit(id: number, body: IUnits): Observable<IUnits> {
    return this.http.put<IUnits>(`http://localhost:3000/units/${id}`, body)
  }
}
