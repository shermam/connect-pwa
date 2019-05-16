import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MasterPageComponent } from "./app-master-page/master-page.component";

const routes: Routes = [
  {
    path: "",
    component: MasterPageComponent,
    children: [
      {
        path: "downtime",
        loadChildren: "./modules/downtime/downtime.module#DowntimeModule"
      },
      {
        path: "trouble-shooting",
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
