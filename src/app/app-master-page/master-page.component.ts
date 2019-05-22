import { Component } from "@angular/core";
import { AuthService } from "../shared/services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-master-page",
  templateUrl: "./master-page.component.html",
  styleUrls: ["./master-page.component.scss"]
})
export class MasterPageComponent {
  userName: string;
  userLogin: string;
  menus: any[];
  sidenavOpened: boolean = false;

  constructor(private authService: AuthService, private router: Router) {
    if (
      authService.currentUser &&
      authService.currentUser.profile &&
      authService.currentUser.profile.name &&
      authService.currentUser.profile.sub
    ) {
      this.userName = authService.currentUser.profile.name;
      this.userLogin = authService.currentUser.profile.sub;
    }

    this.menus = [
      {
        title: "Dashboards",
        route: "/dashboards",
        icon: "dashboard"
      },
      {
        title: "Reports",
        route: "/reports",
        icon: "dashboard"
      },
      {
        title: "Costs",
        route: "/costs",
        icon: "dashboard"
      },
      {
        title: "Inventory",
        route: "/inventory",
        icon: "dashboard"
      },
      {
        title: "Lost Time",
        route: "/downtime",
        icon: "dashboard"
      },
      {
        title: "Trouble Shooting",
        route: "/trouble-shoot",
        icon: "dashboard"
      },
      {
        title: "Process Synoptics",
        route: "/process-sinoptics",
        icon: "dashboard"
      },
      {
        title: "Profile",
        route: "/profile",
        icon: "dashboard"
      }
    ];
  }

  toggleSideNav() {
    this.sidenavOpened = !this.sidenavOpened;
  }

  logout() {
    this.authService.logout();
  }

  navigate(rota: string) {
    this.router.navigate([rota]);
  }
}
