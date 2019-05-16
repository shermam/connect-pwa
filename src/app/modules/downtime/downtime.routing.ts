import { Routes } from "@angular/router";
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";
import { EventListComponent } from "./events/event-list/event-list.component";
import { EventFilterComponent } from "./events/event-filter/event-filter.component";

export const baseRoutes: Routes = [
  {
    path: "event",
    redirectTo: "event-list"
  },
  {
    path: "reasons",
    redirectTo: "reasons-list"
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
        path: "",
        redirectTo: "event-list"
      }
    ]
  }
]);
