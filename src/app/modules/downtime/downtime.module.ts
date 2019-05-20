import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { DowntimeRoutes } from "./downtime.routing";
import { HttpClientModule } from "@angular/common/http";
import { SharedModule } from "src/app/shared/shared.module";

//Material
import {
  MatCardModule,
  MatButtonModule,
  MatFormFieldModule,
  MatSelectModule,
  MatDatepickerModule,
  MatInputModule,
  MatNativeDateModule,
  MatDividerModule,
  MatIconModule
} from "@angular/material";

// Created Components
import { EventAddEditComponent } from "./entities/events/event-add-edit/event-add-edit.component";
import { EventListComponent } from "./entities/events/event-list/event-list.component";
import { EventFilterComponent } from "./entities/events/event-filter/event-filter.component";
import { ReasonFilterComponent } from "./entities/reasons/reason-filter/reason-filter.component";
import { ReasonListComponent } from "./entities/reasons/reason-list/reason-list.component";
import { ReasonAddEditComponent } from "./entities/reasons/reason-add-edit/reason-add-edit.component";
import { EventService } from "./entities/events/event.service";

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
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatDividerModule,
    MatIconModule,
    SharedModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(DowntimeRoutes),
    ReactiveFormsModule
  ],
  providers: [EventService]
})
export class DowntimeModule {}
