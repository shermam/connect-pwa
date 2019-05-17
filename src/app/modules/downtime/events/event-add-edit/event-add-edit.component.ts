import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  MillModel,
  AreaModel,
  SubAreaModel,
  EquipmentModel,
  ClassModel
} from "../../models/Event.models";

const mockMills: MillModel[] = [
  {
    id: 1,
    code: "PRW",
    name: "PERAWANG",
    area: [
      {
        id: 1,
        idMill: 1,
        code: "A1",
        name: "AREA1",
        subArea: [
          {
            id: 1,
            idArea: 1,
            code: "S1",
            name: "SUBAREA1",
            equipment: [
              {
                id: 1,
                idSubArea: 1,
                code: "E1",
                name: "EQUIPMENT1"
              }
            ]
          }
        ]
      },
      {
        id: 2,
        idMill: 1,
        code: "A2",
        name: "AREA2",
        subArea: [
          {
            id: 2,
            idArea: 2,
            code: "S2",
            name: "SUBAREA2",
            equipment: [
              {
                id: 2,
                idSubArea: 2,
                code: "E2",
                name: "EQUIPMENT2"
              }
            ]
          }
        ]
      }
    ]
  }
];
const mockClass: ClassModel[] = [
  {
    id: 1,
    code: "C1",
    name: "CLASS1",
    group: [
      {
        id: 1,
        code: "G1",
        name: "GROUP1",
        idClass: 1,
        reason: [
          {
            id: 1,
            code: "R1",
            name: "REASON1",
            idGroup: 1
          }
        ]
      }
    ]
  },
  {
    id: 2,
    code: "C2",
    name: "CLASS2",
    group: [
      {
        id: 2,
        code: "G2",
        name: "GROUP2",
        idClass: 2,
        reason: [
          {
            id: 2,
            code: "R2",
            name: "REASON2",
            idGroup: 2
          }
        ]
      }
    ]
  }
];

@Component({
  selector: "app-event-add-edit",
  templateUrl: "./event-add-edit.component.html",
  styleUrls: ["./event-add-edit.component.scss"]
})
export class EventAddEditComponent implements OnInit {
  addEditForm = new FormGroup({
    mill: new FormControl(),
    area: new FormControl(),
    subarea: new FormControl(),
    equipment: new FormControl(),
    startDate: new FormControl(),
    startTime: new FormControl(),
    endDate: new FormControl(),
    endTime: new FormControl(),
    class: new FormControl(),
    group: new FormControl(),
    reason: new FormControl(),
    observation: new FormControl()
  });

  mills: MillModel[] = mockMills;
  classes: ClassModel[] = mockClass;

  constructor() {}

  ngOnInit() {
    //this.addEditForm.valueChanges.subscribe(console.log);
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
    console.log(this.addEditForm.value);
  }
}
