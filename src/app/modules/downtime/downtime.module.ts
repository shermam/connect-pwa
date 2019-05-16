import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DowntimeRoutes } from "./downtime.routing";

// Created Components
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";

@NgModule({
  declarations: [EventAddEditComponent],
  imports: [CommonModule, RouterModule.forChild(DowntimeRoutes)]
})
export class DowntimeModule {}
