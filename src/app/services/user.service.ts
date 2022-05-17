import { Injectable } from '@angular/core';
import LOGIN_USER from '../constants/login-mock';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private admin = LOGIN_USER;
  isLogged: boolean = false;
  // TODO: FIX this variable reading on app.component.ts

  constructor() {}

  validateUser(email: string, password: string): boolean {
    if (email == this.admin.email && password == this.admin.password) {
      this.isLogged = true;
      return true;
    } else {
      return false;
    }
  }
}
