import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';

import { of, throwError } from "rxjs";
import { EventModel } from '../models/Event.model';

@Injectable({
  providedIn: "root"
})
export class EventService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) { }

  get() {

  }

  post(entity: EventModel) {
    const url = `${this.apiUrl}/${this.moduleName}/event`;
    return this.http.post<EventModel[]>(url, entity);
    //return of(event);
    //return throwError(new Error("deu pau"));
  }

  put(entity: EventModel) {

  }

  delete(entity: EventModel) {

  }
}
