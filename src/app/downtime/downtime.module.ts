import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { RouterModule } from "@angular/router";
import { DowntimeRoutes } from "./downtime.routing";

@NgModule({
  declarations: [EventAddEditComponent],
  imports: [CommonModule, RouterModule.forChild(DowntimeRoutes)]
})
export class DowntimeModule {}
