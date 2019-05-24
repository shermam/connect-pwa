import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { of } from "rxjs";
import { MillModel } from "../models/Mill.model";

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

@Injectable({
  providedIn: "root"
})
export class MillService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) {}

  get() {
    const url = `${this.apiUrl}lontar/${
      this.moduleName
    }/Location/tree?$expand=Area($expand=SubArea($expand=Equipment))`;
    return this.http.get<MillModel[]>(url);
    //return of(mockMills);
  }

  post(entity: MillModel) {
    const url = `${this.apiUrl}/${this.moduleName}/mill`;
    return this.http.post<MillModel[]>(url, entity);
  }

  put(entity: MillModel) {}

  delete(entity: MillModel) {}
}
