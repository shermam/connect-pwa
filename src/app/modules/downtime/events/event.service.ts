import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

import {
  AreaModel,
  EquipmentModel,
  MillModel,
  SubAreaModel
} from "../models/Event.models";

@Injectable({
  providedIn: "root"
})
export class EventService {
  apiUrl: string = environment.apiUrl;
  moduleName: string = "downtime";

  constructor(private http: HttpClient) {}

  getMills() {
    const url = `${this.apiUrl}/${this.moduleName}/Common/GetMillListAsync`;
    return this.http.get<MillModel[]>(url);
  }
}
