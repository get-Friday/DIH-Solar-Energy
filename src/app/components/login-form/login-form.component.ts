import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import LOGIN_USER from 'src/app/constants/login';

@Component({
  selector: 'DIH-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;
  failedLogin: boolean = false;

  constructor(private route: Router) {}

  ngOnInit(): void {}

  validate() {
    if (
      this.email == LOGIN_USER.username &&
      this.password == LOGIN_USER.password
    ) {
      this.route.navigateByUrl('dashboard');
    } else {
      this.failedLogin = true;
    }

    // localStorage pra não pedir login toda vez
    // comparar com uma constante de usuário e.g. admin admin
  }
}
