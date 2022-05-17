import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'DIH-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  email: string;
  password: string;
  failedLogin: boolean = false;

  constructor(private route: Router, private userService: UserService) {}

  ngOnInit(): void {}

  validate() {
    if (this.userService.validateUser(this.email, this.password)) {
      this.route.navigateByUrl('dashboard');
    } else {
      this.failedLogin = true;
    }
  }
}
