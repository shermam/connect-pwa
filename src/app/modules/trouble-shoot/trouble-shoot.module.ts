import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ManagerFilterComponent } from "./managers/manager-filter/manager-filter.component";
import { ManagerListComponent } from "./managers/manager-list/manager-list.component";
import { ManagerAddEditComponent } from "./managers/manager-add-edit/manager-add-edit.component";

@NgModule({
  declarations: [
    ManagerFilterComponent,
    ManagerListComponent,
    ManagerAddEditComponent
  ],
  imports: [CommonModule]
})
export class TroubleShootModule {}
