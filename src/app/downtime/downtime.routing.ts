import { Routes } from "@angular/router";
import { EventAddEditComponent } from "./events/event-add-edit/event-add-edit.component";

export const DowntimeRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "event",
        component: EventAddEditComponent
      },
      {
        path: "",
        redirectTo: "event"
      }
    ]
  }
];
