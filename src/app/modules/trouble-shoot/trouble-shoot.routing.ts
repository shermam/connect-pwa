import { Routes } from "@angular/router";
import { ManagerAddEditComponent } from "./managers/manager-add-edit/manager-add-edit.component";
import { ManagerListComponent } from "./managers/manager-list/manager-list.component";
import { ManagerFilterComponent } from "./managers/manager-filter/manager-filter.component";

export const baseRoutes: Routes = [
  {
    path: "manager",
    redirectTo: "manager-list"
  }
];

export const TroubleShootRoutes: Routes = baseRoutes.concat([
  {
    path: "",
    children: [
      {
        path: "manager-edit/:id",
        component: ManagerAddEditComponent
      },
      {
        path: "manager-add",
        component: ManagerAddEditComponent
      },
      {
        path: "manager-list",
        component: ManagerListComponent
      },
      {
        path: "manager-filter",
        component: ManagerFilterComponent
      },
      {
        path: "",
        redirectTo: "manager-list"
      }
    ]
  }
]);
