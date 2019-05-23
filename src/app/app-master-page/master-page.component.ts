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
        icon: "assignment"
      },
      {
        title: "Costs",
        route: "/costs",
        icon: "attach_money"
      },
      {
        title: "Inventory",
        route: "/inventory",
        icon: "dashboard"
      },
      {
        title: "Lost Time",
        route: "/downtime",
        icon: "assignment_late"
      },
      {
        title: "Trouble Shooting",
        route: "/trouble-shoot",
        icon: "build"
      },
      {
        title: "Process Synoptics",
        route: "/process-sinoptics",
        icon: "device_hub"
      },
      {
        title: "Profile",
        route: "/profile",
        icon: "person"
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
