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

  constructor() {}

  login(user): Observable<boolean> {
    if (
      user.email == LOGIN_USER.email &&
      user.password == LOGIN_USER.password
    ) {
      this.passedLogin = true;
    }

    return iif(
      () => this.passedLogin,
      of(true).pipe(tap(() => (this.isLoggedIn = true))),
      of(false).pipe(tap(() => (this.isLoggedIn = false)))
    );
    // return of(true).pipe(
    //   delay(1000),
    //   tap(() => (this.isLoggedIn = true))
    // );
  }
}
