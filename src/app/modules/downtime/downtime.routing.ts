import { Routes } from "@angular/router";
import { EventAddEditComponent } from "./entities/events/event-add-edit/event-add-edit.component";
import { EventListComponent } from "./entities/events/event-list/event-list.component";
import { EventFilterComponent } from "./entities/events/event-filter/event-filter.component";
import { ReasonFilterComponent } from "./entities/reasons/reason-filter/reason-filter.component";
import { ReasonListComponent } from "./entities/reasons/reason-list/reason-list.component";
import { ReasonAddEditComponent } from "./entities/reasons/reason-add-edit/reason-add-edit.component";

export const baseRoutes: Routes = [
  {
    path: "event",
    redirectTo: "event-list"
  },
  {
    path: "reasons",
    redirectTo: "reason-list"
  }
];

export const DowntimeRoutes: Routes = [
  {
    path: "event-edit/:id",
    component: EventAddEditComponent
  },
  {
    path: "event-add",
    component: EventAddEditComponent
  },
  {
    path: "event-list",
    component: EventListComponent
  },
  {
    path: "event-filter",
    component: EventFilterComponent
  },
  {
    path: "reason-edit/:id",
    component: ReasonAddEditComponent
  },
  {
    path: "reason-add",
    component: ReasonAddEditComponent
  },
  {
    path: "reason-list",
    component: ReasonListComponent
  },
  {
    path: "reason-filter",
    component: ReasonFilterComponent
  },
  {
    path: "",
    redirectTo: "event-list"
  },
  ...baseRoutes
];
