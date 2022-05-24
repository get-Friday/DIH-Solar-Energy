import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IGeneratedEnergy from '../models/generated-energy.model';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http: HttpClient) { }

  addEnergy(energy: IGeneratedEnergy): Observable<IGeneratedEnergy> {
    return this.http.post<IGeneratedEnergy>('http://localhost:3000/energy', energy)
  }

  getEnergy(): Observable<IGeneratedEnergy[]> {
    return this.http.get<IGeneratedEnergy[]>('http://localhost:3000/energy')
  }
}
