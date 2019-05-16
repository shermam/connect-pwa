import { Routes } from "@angular/router";
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventFilterComponent } from "./events/event-filter/event-filter.component";
import { ReasonFilterComponent } from "./reasons/reason-filter/reason-filter.component";
import { ReasonListComponent } from "./reasons/reason-list/reason-list.component";
import { ReasonAddEditComponent } from "./reasons/reason-add-edit/reason-add-edit.component";

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

export const DowntimeRoutes: Routes = baseRoutes.concat([
  {
    path: "",
    children: [
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
      }
    ]
  }
]);
