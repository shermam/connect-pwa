import { Component, OnInit, Inject, LOCALE_ID } from "@angular/core";
import { Observable } from "rxjs";
import { EventModelList } from "../../../models/Event.model";
import { EventService } from "../../../services/event.service";
import { column } from "src/app/shared/components/ihm-table/ihm-table.component";
import { formatDate } from "@angular/common";

@Component({
  selector: "app-event-list",
  templateUrl: "./event-list.component.html",
  styleUrls: ["./event-list.component.scss"]
})
export class EventListComponent implements OnInit {
  $data: Observable<EventModelList[]>;
  columnsToDisplay: column[];
  dateFormatter = dateString =>
    formatDate(new Date(dateString), "dd/MM/yyyy HH:mm", this.locale);

  constructor(
    private service: EventService,
    @Inject(LOCALE_ID) private locale: string
  ) {}

  ngOnInit() {
    this.$data = this.service.get();
    this.columnsToDisplay = [
      {
        label: "Location",
        property: "idLocation"
      },
      {
        label: "Start",
        property: "beginDateTime",
        formatter: this.dateFormatter
      },
      {
        label: "End",
        property: "endDateTime",
        formatter: this.dateFormatter
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
