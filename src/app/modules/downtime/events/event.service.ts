import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

import { MillModel, ClassModel, EventModel } from "../models/Event.models";
import { of, throwError } from "rxjs";

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
@Injectable({
  providedIn: "root"
})
export class EventService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) {}

  getMills() {
    const url = `${this.apiUrl}/${this.moduleName}/Common/GetMillListAsync`;
    //return this.http.get<MillModel[]>(url);
    return of(mockMills);
  }

  getClasses() {
    const url = `${this.apiUrl}/${this.moduleName}/DowntimeClass/GetAsync`;
    //return this.http.get<ClassModel[]>(url);
    return of(mockClass);
  }

  postEvent(event: EventModel) {
    const url = `${this.apiUrl}/${this.moduleName}/DowntimeEvent/Post`;
    //return this.http.post<EventModel[]>(url, event);
    return of(event);
    //return throwError(new Error("deu pau"));
  }
}
