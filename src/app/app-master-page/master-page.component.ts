import { Component } from "@angular/core";
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.scss"]
})
export class MasterPageComponent {

  constructor(private authService: AuthService) {

  }

  logout() {
    this.authService.logout();
  }

}
