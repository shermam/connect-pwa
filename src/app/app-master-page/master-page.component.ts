import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.scss"]
})
export class MasterPageComponent {
  constructor(private authService: AuthService, private http: HttpClient) {}

  logout() {
    this.authService.logout();
  }

  teste() {
    this.http.get("https://api.myjson.com/bins/evyto").subscribe(console.log);
  }
}
