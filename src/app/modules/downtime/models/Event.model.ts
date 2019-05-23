export class EventModel {
  id: number;
  Comment: string;
  BeginDateTime: Date;
  EndDateTime: Date;
  IdReason: number;
  IdSubArea: number;
  IdEquipment: number;
  IdSubEquipament: number;
}

export class EventModelList {
  idEvent: number;
  idKeyHistory: string;
  idLocation: number;
  idReason: number;
  beginDateTime: string;
  endDateTime: string;
  comment: string;
  insDateTime: string;
  updDateTime: string;
  userCreated: string;
  userUpdated: string;
  idSubEquipament: number;
  idKeyHistoryNavigation: number;
  idLocationNavigation: number;
  idReasonNavigation: number;
  idSubEquipamentNavigation: number;
}
