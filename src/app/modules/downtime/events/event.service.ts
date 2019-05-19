import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

import { MillModel, ClassModel, EventModel } from "../models/Event.models";
import { of, throwError } from "rxjs";

const mockMills: MillModel[] = [
  {
    Area: [
      {
        SubArea: [
          {
            Equipment: [
              {
                IdEquipment: 1,
                IdSubArea: 1,
                Code: "DEBARKABB",
                Name: "DEBARKING 01",
                Description: "",
                Active: true,
                InsDateTime: "2019-04-30T12:21:19.777-03:00",
                UpdDateTime: "2019-04-30T12:21:19.777-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              },
              {
                IdEquipment: 2,
                IdSubArea: 1,
                Code: "CUTERABB",
                Name: "CUTTER 01",
                Description: "",
                Active: true,
                InsDateTime: "2019-04-30T12:21:19.777-03:00",
                UpdDateTime: "2019-04-30T12:21:19.777-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              },
              {
                IdEquipment: 3,
                IdSubArea: 1,
                Code: "DEBARK3",
                Name: "DEBARKING 03",
                Description: null,
                Active: true,
                InsDateTime: "2019-04-30T12:21:19.777-03:00",
                UpdDateTime: "2019-04-30T12:21:19.777-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              },
              {
                IdEquipment: 7,
                IdSubArea: 1,
                Code: "CUTERABB1",
                Name: "CUTERABB 04",
                Description: null,
                Active: true,
                InsDateTime: "2019-04-30T12:21:19.777-03:00",
                UpdDateTime: "2019-04-30T12:21:19.777-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              }
            ],
            IdSubArea: 1,
            IdArea: 1,
            Code: "CHIPPERLINE 01",
            Name: "CHIPPER LINE 01",
            Description: "",
            Active: true,
            InsDateTime: "2019-04-30T12:19:15.877-03:00",
            UpdDateTime: "2019-04-30T12:19:15.877-03:00",
            UserCreated: "TESTE",
            UserUpdated: "TESTE"
          },
          {
            Equipment: [
              {
                IdEquipment: 9,
                IdSubArea: 2,
                Code: "DEBARAA4",
                Name: "DEBARKNG A4",
                Description: null,
                Active: true,
                InsDateTime: "2019-04-30T00:00:00-03:00",
                UpdDateTime: "2019-04-30T00:00:00-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              },
              {
                IdEquipment: 10,
                IdSubArea: 2,
                Code: "CUTERABB2",
                Name: "CUTERABB 05 ",
                Description: null,
                Active: true,
                InsDateTime: "2019-04-30T00:00:00-03:00",
                UpdDateTime: "2019-04-30T00:00:00-03:00",
                UserCreated: "TESTE",
                UserUpdated: "TESTE"
              }
            ],
            IdSubArea: 2,
            IdArea: 1,
            Code: "CHIPPERLINE 02",
            Name: "CHIPPER LINE 02",
            Description: "",
            Active: true,
            InsDateTime: "2019-04-30T12:19:15.877-03:00",
            UpdDateTime: "2019-04-30T12:19:15.877-03:00",
            UserCreated: "TESTE",
            UserUpdated: "TESTE"
          }
        ],
        IdArea: 1,
        IdMill: 3,
        InsDateTime: "2019-04-30T12:16:57.82-03:00",
        Active: true,
        UserCreated: "TESTE     ",
        UserUpdated: "TESTE     ",
        Code: "WOOD",
        Name: "WOOD PREPARATION",
        UpdDateTime: "2019-04-30T12:16:57.82-03:00"
      },
      {
        SubArea: [],
        IdArea: 3,
        IdMill: 3,
        InsDateTime: "2019-04-30T12:16:57.82-03:00",
        Active: true,
        UserCreated: "TESTE     ",
        UserUpdated: "TESTE     ",
        Code: "CHEMICAL",
        Name: "CHEMICAL PLANT",
        UpdDateTime: "2019-04-30T12:16:57.82-03:00"
      },
      {
        SubArea: [],
        IdArea: 4,
        IdMill: 3,
        InsDateTime: "2019-04-30T12:16:57.82-03:00",
        Active: true,
        UserCreated: "TESTE     ",
        UserUpdated: "TESTE     ",
        Code: "POWER",
        Name: "POWER PLANT",
        UpdDateTime: "2019-04-30T12:16:57.82-03:00"
      }
    ],
    IdMill: 3,
    Code: "PRW-PULP",
    Name: "PERAWANG PULP",
    Description: "",
    Active: true,
    InsDateTime: "2019-04-30T12:09:34.57-03:00",
    UpdDateTime: "2019-04-30T12:09:34.57-03:00",
    UserCreated: "TESTE     ",
    UserUpdated: "TESTE     "
  }
];
const mockClass: ClassModel[] = [
  {
    GroupReason: [
      {
        Reason: [
          {
            IdReason: 1,
            IdGroup: 1,
            Code: "1",
            Name: "teste",
            Description: "teste",
            Active: true,
            InsDateTime: "2019-05-07T00:00:00-03:00",
            UpdDateTime: "2019-05-07T00:00:00-03:00",
            UserCreated: "teste",
            UserUpdated: "teste"
          },
          {
            IdReason: 9,
            IdGroup: 1,
            Code: "9",
            Name: "reason 1",
            Description: "reason 1",
            Active: true,
            InsDateTime: "2019-05-07T00:00:00-03:00",
            UpdDateTime: "2019-05-07T00:00:00-03:00",
            UserCreated: "teste",
            UserUpdated: "teste"
          },
          {
            IdReason: 11,
            IdGroup: 1,
            Code: "11",
            Name: "reason 2",
            Description: "reason 2",
            Active: true,
            InsDateTime: "2019-05-07T00:00:00-03:00",
            UpdDateTime: "2019-05-07T00:00:00-03:00",
            UserCreated: "teste",
            UserUpdated: "teste"
          }
        ],
        IdGroup: 1,
        IdClass: 1,
        Code: "1",
        Name: "teste",
        Description: "teste",
        Active: true,
        InsDateTime: "2019-05-07T00:00:00-03:00",
        UpdDateTime: "2019-05-07T00:00:00-03:00",
        UserCreated: "teste",
        UserUpdated: "teste"
      },
      {
        Reason: [
          {
            IdReason: 13,
            IdGroup: 3,
            Code: "12",
            Name: "reason 3",
            Description: "reason 3",
            Active: true,
            InsDateTime: "2019-05-07T00:00:00-03:00",
            UpdDateTime: "2019-05-07T00:00:00-03:00",
            UserCreated: "teste",
            UserUpdated: "teste"
          }
        ],
        IdGroup: 3,
        IdClass: 1,
        Code: "3",
        Name: "group 3",
        Description: "group 3",
        Active: true,
        InsDateTime: "2019-05-07T00:00:00-03:00",
        UpdDateTime: "2019-05-07T00:00:00-03:00",
        UserCreated: "teste",
        UserUpdated: "teste"
      }
    ],
    IdClass: 1,
    Code: "OP",
    Name: "OPERATIONAL",
    Description: "",
    Active: true,
    InsDateTime: "2019-05-03T03:53:21.237-03:00",
    UpdDateTime: "2019-05-03T03:53:21.237-03:00",
    UserCreated: "TESTE",
    UserUpdated: "TESTE"
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
