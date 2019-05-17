import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { DowntimeRoutes } from "./downtime.routing";

//Material
import { MatCardModule, MatButtonModule } from "@angular/material";

// Created Components
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventFilterComponent } from "./events/event-filter/event-filter.component";
import { ReasonFilterComponent } from "./reasons/reason-filter/reason-filter.component";
import { ReasonListComponent } from "./reasons/reason-list/reason-list.component";
import { ReasonAddEditComponent } from "./reasons/reason-add-edit/reason-add-edit.component";

@NgModule({
  declarations: [
    EventAddEditComponent,
    EventListComponent,
    EventFilterComponent,
    ReasonFilterComponent,
    ReasonListComponent,
    ReasonAddEditComponent
  ],
  imports: [
    MatCardModule,
    MatButtonModule,
    CommonModule,
    RouterModule.forChild(DowntimeRoutes)
  ]
})
export class DowntimeModule {}
