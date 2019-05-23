import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { EventModelList } from "../../../models/Event.model";
import { EventService } from "../../../services/event.service";
import { column } from "src/app/shared/components/ihm-table/ihm-table.component";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  $data: Observable<EventModelList[]>;
  columnsToDisplay: column[];

  constructor(private service: EventService) {}

  ngOnInit() {
    this.$data = this.service.get();
    this.columnsToDisplay = [
      {
        label: "Location",
        property: "idLocation"
      },
      {
        label: "Start",
        property: "beginDateTime"
      },
      {
        label: "End",
        property: "endDateTime"
      },
      {
        label: "Reason",
        property: "idReason"
      },
      {
        label: "Edit",
        property: "edit",
        action: {
          icon: "edit",
          label: "edit",
          callback: row => console.log(row)
        }
      },
      {
        label: "Delete",
        property: "delete",
        action: {
          icon: "delete",
          label: "delete",
          callback: row => console.log(row)
        }
      }
    ];
  }
}
