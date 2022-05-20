import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import IEnergy from '../models/energy.model';

@Injectable({
  providedIn: 'root'
})
export class EnergyService {

  constructor(private http: HttpClient) { }

  addEnergy(energy: IEnergy): Observable<IEnergy> {
    return this.http.post<IEnergy>('http://localhost:3000/energy', energy)
  }
}
