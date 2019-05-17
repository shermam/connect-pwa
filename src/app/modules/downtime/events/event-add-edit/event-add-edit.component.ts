import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MillModel } from "../../models/Event.models";

const mockMills: MillModel[] = [
  {
    idMill: 1,
    Code: "PRW",
    Name: "PERAWANG",
    Areas: [
      {
        idArea: 1,
        idMill: 1,
        Code: "A1",
        Name: "AREA1",
        SubAreas: [
          {
            idSubArea: 1,
            idArea: 1,
            Code: "S1",
            Name: "SUBAREA1",
            Equipments: [
              {
                idEquipment: 1,
                idSubArea: 1,
                Code: "E1",
                Name: "EQUIPMENT1"
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

  ngOnInit() {}

  onSubmit() {
    console.log(this.addEditForm.value);
  }
}
