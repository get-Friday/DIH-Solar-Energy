import { Component } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'DIH-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Solar-Energy';
  isLogged: boolean = this.userService.isLogged;

  constructor(private userService: UserService) {}
}
