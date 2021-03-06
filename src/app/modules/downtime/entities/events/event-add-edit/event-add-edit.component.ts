import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import { combineDateTime, calculeDuration } from "src/app/shared/util";
import { EventService } from "../../../services/event.service";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";
import { MillService } from "../../../services/mill.service";
import { ClassService } from "../../../services/class.service";
import { MillModel } from "../../../models/Mill.model";
import { ClassModel } from "../../../models/Class.model";
import { EventModel } from "../../../models/Event.model";

@Component({
  selector: "app-event-add-edit",
  templateUrl: "./event-add-edit.component.html",
  styleUrls: ["./event-add-edit.component.scss"]
})
export class EventAddEditComponent implements OnInit {
  id: number = null;
  addEditForm = this.fb.group({
    id: [this.id],
    mill: [],
    area: [],
    subarea: [],
    equipment: [],
    startDate: [],
    startTime: [],
    endDate: [],
    endTime: [],
    class: [],
    group: [],
    reason: [],
    observation: []
  });

  mills: MillModel[] = null;
  classes: ClassModel[] = null;
  duration: string = "0d 0h 0m";
  combinedStartDate: Date;
  combinedEndDate: Date;

  constructor(
    private fb: FormBuilder,
    private eventService: EventService,
    private millService: MillService,
    private classService: ClassService,
    private location: Location,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.millService.get().subscribe(mills => (this.mills = mills));
    this.classService.get().subscribe(classes => (this.classes = classes));
  }

  calcDuration() {
    const startTime = this.addEditForm.value.startTime;
    const startDate: Date = this.addEditForm.value.startDate;
    const endTime = this.addEditForm.value.endTime;
    const endDate: Date = this.addEditForm.value.endDate;

    if (!(startTime && startDate && endTime && endDate)) return;

    this.combinedStartDate = combineDateTime(startDate, startTime);
    this.combinedEndDate = combineDateTime(endDate, endTime);

    this.duration = calculeDuration(
      this.combinedStartDate,
      this.combinedEndDate
    );
  }

  change(field: string) {
    const values = this.addEditForm.value;
    switch (field) {
      case "mill":
        values.area = null;
      case "area":
        values.subarea = null;
      case "subarea":
        values.equipment = null;
        break;
      case "class":
        values.group = null;
      case "group":
        values.reason = null;
        break;
    }

    this.addEditForm.setValue(values);
  }

  onSubmit() {
    const event: EventModel = new EventModel();
    const form = this.addEditForm.value;

    event.id = form.id;
    event.Comment = form.observation;
    event.BeginDateTime = this.combinedStartDate;
    event.EndDateTime = this.combinedEndDate;
    event.IdReason = form.reason.IdReason;
    event.IdSubArea = form.subarea.IdSubArea;
    event.IdEquipment = form.equipment ? form.equipment.IdEquipment : null;
    event.IdSubEquipament = null;

    this.eventService.post(event).subscribe(
      success => {
        this.alert("Success", "Data successfully saved!");
      },
      error => {
        console.log(error);
        this.alert("Error", error.error ? error.error.message : error.message);
      }
    );
  }

  alert(title: string, text: string) {
    const dialogRef = this.dialog.open(AlertComponent, {
      width: "250px",
      data: { title, text }
    });

    dialogRef.afterClosed().subscribe(() => {
      this.location.back();
    });
  }

  cancel() {
    this.location.back();
  }
}
