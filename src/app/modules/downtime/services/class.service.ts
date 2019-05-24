import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { of } from "rxjs";
import { ClassModel } from "../models/Class.model";

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
export class ClassService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) {}

  get() {
    const url = `${this.apiUrl}lontar/${
      this.moduleName
    }/ClassReason/tree?$expand=GroupReason($expand=Reason)`;
    return this.http.get<ClassModel[]>(url);
    //return of(mockClass);
  }

  post(entity: ClassModel) {}

  put(entity: ClassModel) {}

  delete(entity: ClassModel) {}
}
