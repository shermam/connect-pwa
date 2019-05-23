import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Location } from "@angular/common";

@Component({
  selector: 'app-unauthorized',
  templateUrl: './unauthorized.component.html',
  styleUrls: ['./unauthorized.component.scss']
})
export class UnauthorizedComponent {

  constructor(
    private service: AuthService,
    private location: Location
  ) { }

  login() {
    this.service.login();
  }

  goback() {
    this.location.back();
  }

}
