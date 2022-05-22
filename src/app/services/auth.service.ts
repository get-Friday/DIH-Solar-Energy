import { Injectable } from '@angular/core';
import { Observable, iif, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import LOGIN_USER from '../constants/login-mock';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  redirectUrl: string;
  isLoggedIn: boolean = false;
  passedLogin: boolean = false;
  private admin: { email: string; password: string } = {
    email: LOGIN_USER.email,
    password: LOGIN_USER.password,
  };

  constructor() {}

  login(user): Observable<boolean> {
    if (
      user.email == this.admin.email &&
      user.password == this.admin.password
    ) {
      this.passedLogin = true;
    }

    return iif(
      () => this.passedLogin,
      of(true).pipe(tap(() => (this.isLoggedIn = true))),
      of(false).pipe(tap(() => (this.isLoggedIn = false)))
    );
  }
}
