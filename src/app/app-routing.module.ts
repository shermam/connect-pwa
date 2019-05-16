import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MasterPageComponent } from "./app-master-page/master-page.component";

//TODO bla

const routes: Routes = [
  {
    path: "",
    component: MasterPageComponent,
    children: [
      {
        path: "downtime",
        loadChildren: "./modules/downtime/downtime.module#DowntimeModule"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
