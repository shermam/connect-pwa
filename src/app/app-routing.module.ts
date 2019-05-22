import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MasterPageComponent } from "./app-master-page/master-page.component";
import { UnauthorizedComponent } from "./shared/components/unauthorized/unauthorized.component";
import { AuthGuardService } from "./shared/services/auth-guard.service";

const routes: Routes = [
  {
    path: "unauthorized",
    component: UnauthorizedComponent
  },
  {
    path: "",
    component: MasterPageComponent,
    // canActivate: [AuthGuardService],
    children: [
      {
        path: "downtime",
        loadChildren: "./modules/downtime/downtime.module#DowntimeModule"
      },
      {
        path: "trouble-shoot",
        loadChildren:
          "./modules/trouble-shoot/trouble-shoot.module#TroubleShootModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
