import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";
import {
  MillModel,
  AreaModel,
  SubAreaModel,
  EquipmentModel,
  ClassModel,
  EventModel
} from "../../models/Event.models";
import { combineDateTime, calculeDuration } from "src/app/shared/util";
import { EventService } from "../event.service";
import { Location } from "@angular/common";
import { MatDialog } from "@angular/material";
import { AlertComponent } from "src/app/shared/components/alert/alert.component";

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
    private location: Location,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.eventService.getMills().subscribe(mills => (this.mills = mills));
    this.eventService
      .getClasses()
      .subscribe(classes => (this.classes = classes));
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
    event.observation = form.observation;
    event.startTime = this.combinedStartDate;
    event.endTime = this.combinedEndDate;
    event.idReason = form.reason.id;
    event.idSubArea = form.subarea.id;
    event.idEquipment = form.equipment ? form.equipment.id : null;
    event.idSubEquipment = null;

    this.eventService.postEvent(event).subscribe(
      success => {
        this.alert("Success", "Data successfully saved!");
      },
      error => {
        alert(error.error ? error.error.message : error.message);
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
