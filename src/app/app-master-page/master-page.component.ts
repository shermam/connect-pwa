import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.scss"]
})
export class MasterPageComponent {
  userName: string;
  userLogin: string;

  constructor(private authService: AuthService) {
    if (
      authService.currentUser &&
      authService.currentUser.profile &&
      authService.currentUser.profile.name &&
      authService.currentUser.profile.sub
    ) {
      this.userName = authService.currentUser.profile.name;
      this.userLogin = authService.currentUser.profile.sub;
    }
  }

  logout() {
    this.authService.logout();
  }
}
