import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'dih-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  email: string;
  password: string;
  failedLogin: boolean = false;

  constructor(private route: Router, private authService: AuthService) {}

  onSubmit(login: NgForm) {
    this.authService.login(login.value).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.route.navigateByUrl('admin');
      } else {
        this.failedLogin = true;
      }
    });
  }
}
