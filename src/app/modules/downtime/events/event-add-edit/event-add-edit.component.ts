import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {
  MillModel,
  AreaModel,
  SubAreaModel,
  EquipmentModel
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
    equipment: new FormControl()
  });

  mills: MillModel[] = mockMills;

  constructor() {}

  ngOnInit() {
    this.addEditForm.valueChanges.subscribe(console.log);
  }

  changeLocation(field: string) {
    const values = this.addEditForm.value;
    switch (field) {
      case "mill":
        values.area = null;
      case "area":
        values.subarea = null;
      case "subarea":
        values.equipment = null;
        break;
    }

    this.addEditForm.setValue(values);
  }

  onSubmit() {
    console.log(this.addEditForm.value);
  }
}
