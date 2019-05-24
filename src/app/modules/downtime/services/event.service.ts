import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

import { of, throwError, Observable } from "rxjs";
import { EventModel, EventModelList } from "../models/Event.model";

const mock: EventModelList[] = [
  {
    idEvent: 27,
    idKeyHistory: null,
    idLocation: 4,
    idReason: 1,
    beginDateTime: "2019-05-07T04:00:00+00:00",
    endDateTime: "2019-05-10T06:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T09:05:59.496988-03:00",
    updDateTime: "2019-05-10T09:05:59.4969918-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 28,
    idKeyHistory: null,
    idLocation: 4,
    idReason: 1,
    beginDateTime: "2019-05-03T04:00:00+00:00",
    endDateTime: "2019-05-04T06:00:00+00:00",
    comment: "problem in the pulp maker",
    insDateTime: "2019-05-10T09:22:53.7879016-03:00",
    updDateTime: "2019-05-10T09:22:53.7879742-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 32,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-04-25T06:00:00+00:00",
    endDateTime: "2019-04-30T05:00:00+00:00",
    comment: "testing",
    insDateTime: "2019-05-10T10:11:27.682401-03:00",
    updDateTime: "2019-05-10T10:11:27.6824046-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 2,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 33,
    idKeyHistory: null,
    idLocation: 6,
    idReason: 1,
    beginDateTime: "2019-04-17T04:00:00+00:00",
    endDateTime: "2019-04-18T23:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T10:58:01.122483-03:00",
    updDateTime: "2019-05-10T10:58:01.1227267-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 2,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 34,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-03-13T12:00:00+00:00",
    endDateTime: "2019-03-15T14:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T11:06:38.2636476-03:00",
    updDateTime: "2019-05-10T11:06:38.2637047-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 12,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 35,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-03-13T12:00:00+00:00",
    endDateTime: "2019-03-15T14:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T11:09:30.3893657-03:00",
    updDateTime: "2019-05-10T11:09:30.3893672-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 12,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 37,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-04-10T14:00:00+00:00",
    endDateTime: "2019-04-12T03:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T11:10:36.0492945-03:00",
    updDateTime: "2019-05-10T11:10:36.0493022-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 1,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 39,
    idKeyHistory: null,
    idLocation: 4,
    idReason: 1,
    beginDateTime: "2019-05-01T04:00:00+00:00",
    endDateTime: "2019-05-05T20:20:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T14:20:53.8390973-03:00",
    updDateTime: "2019-05-10T14:20:53.8391429-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 9,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 41,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-08T14:00:00+00:00",
    endDateTime: "2019-05-09T04:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-10T14:36:47.7609709-03:00",
    updDateTime: "2019-05-10T14:36:47.7611307-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 42,
    idKeyHistory: null,
    idLocation: 4,
    idReason: 1,
    beginDateTime: "2019-05-11T00:00:00+00:00",
    endDateTime: "2019-05-11T03:00:00+00:00",
    comment: null,
    insDateTime: "2019-05-13T07:28:08.7520685-03:00",
    updDateTime: "2019-05-13T07:28:08.7521349-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: 9,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 44,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-19T03:00:00-03:00",
    endDateTime: "2019-05-19T03:00:00-03:00",
    comment: null,
    insDateTime: "2019-05-19T00:50:43.0893753-03:00",
    updDateTime: "2019-05-19T00:50:43.0894747-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 45,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-19T03:00:00-03:00",
    endDateTime: "2019-05-19T03:00:00-03:00",
    comment: "shermam",
    insDateTime: "2019-05-19T00:53:41.2676755-03:00",
    updDateTime: "2019-05-19T00:53:41.2676761-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 46,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-20T03:00:00-03:00",
    endDateTime: "2019-05-20T03:00:00-03:00",
    comment: "teste do shermam",
    insDateTime: "2019-05-20T09:56:02.26442-03:00",
    updDateTime: "2019-05-20T09:56:02.2645615-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 47,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-20T03:00:00-03:00",
    endDateTime: "2019-05-20T03:00:00-03:00",
    comment: "serhaml aksjdf laskdjf a",
    insDateTime: "2019-05-20T10:12:31.0116519-03:00",
    updDateTime: "2019-05-20T10:12:31.011736-03:00",
    userCreated: "teste",
    userUpdated: "teste",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 1044,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-23T03:00:00-03:00",
    endDateTime: "2019-05-23T04:00:00-03:00",
    comment: null,
    insDateTime: "2019-05-23T09:39:05.5027154-03:00",
    updDateTime: "2019-05-23T09:39:05.5028456-03:00",
    userCreated: "Shermam.Miranda",
    userUpdated: "Shermam.Miranda",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 1045,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-23T03:00:00-03:00",
    endDateTime: "2019-05-23T03:00:00-03:00",
    comment: null,
    insDateTime: "2019-05-23T11:08:04.3892532-03:00",
    updDateTime: "2019-05-23T11:08:04.3892539-03:00",
    userCreated: "Shermam.Miranda",
    userUpdated: "Shermam.Miranda",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  },
  {
    idEvent: 1046,
    idKeyHistory: null,
    idLocation: 2,
    idReason: 1,
    beginDateTime: "2019-05-23T03:00:00-03:00",
    endDateTime: "2019-05-23T03:00:00-03:00",
    comment: null,
    insDateTime: "2019-05-23T11:08:52.0010718-03:00",
    updDateTime: "2019-05-23T11:08:52.0010724-03:00",
    userCreated: "Shermam.Miranda",
    userUpdated: "Shermam.Miranda",
    idSubEquipament: null,
    idKeyHistoryNavigation: null,
    idLocationNavigation: null,
    idReasonNavigation: null,
    idSubEquipamentNavigation: null
  }
];

@Injectable({
  providedIn: "root"
})
export class EventService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) {}

  get(): Observable<EventModelList[]> {
    const url = `${this.apiUrl}/${this.moduleName}/event`;
    //return this.http.get<EventModelList[]>(url);
    return of(mock);
  }

  post(entity: EventModel) {
    let url = `${this.apiUrl}lontar/${this.moduleName}/event`;

    if (entity.Comment == "1") {
      url = `${this.apiUrl}oki/${this.moduleName}/event`;
    }

    return this.http.post<EventModel[]>(url, entity);
    //return of(event);
    //return throwError(new Error("deu pau"));
  }

  put(entity: EventModel) {}

  delete(entity: EventModel) {}
}
