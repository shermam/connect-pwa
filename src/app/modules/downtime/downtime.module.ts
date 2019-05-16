import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DowntimeRoutes } from "./downtime.routing";

// Created Components
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { EventListComponent } from './events/event-list/event-list.component';
import { EventFilterComponent } from './events/event-filter/event-filter.component';

@NgModule({
  declarations: [EventAddEditComponent, EventListComponent, EventFilterComponent],
  imports: [CommonModule, RouterModule.forChild(DowntimeRoutes)]
})
export class DowntimeModule {}
