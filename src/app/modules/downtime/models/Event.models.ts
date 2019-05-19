export class MillModel {
  Area: AreaModel[];
  IdMill: number;
  Code: string;
  Name: string;
  Description: string;
  Active: boolean;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}
export class AreaModel {
  SubArea: SubAreaModel[];
  IdArea: number;
  IdMill: number;
  InsDateTime: string;
  Active: boolean;
  UserCreated: string;
  UserUpdated: string;
  Code: string;
  Name: string;
  UpdDateTime: string;
}
export class SubAreaModel {
  Equipment: EquipmentModel[];
  IdSubArea: number;
  IdArea: number;
  Code: string;
  Name: string;
  Description: string;
  Active: boolean;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}

export class EquipmentModel {
  IdEquipment: number;
  IdSubArea: number;
  Code: string;
  Name: string;
  Description: string;
  Active: boolean;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}

export class ClassModel {
  GroupReason: GroupModel[];
  IdClass: number;
  Code: string;
  Name: string;
  Description: string;
  Active: true;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}
export class GroupModel {
  Reason: ReasonModel[];
  IdGroup: number;
  IdClass: number;
  Code: string;
  Name: string;
  Description: string;
  Active: true;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}
export class ReasonModel {
  IdReason: number;
  IdGroup: number;
  Code: string;
  Name: string;
  Description: string;
  Active: boolean;
  InsDateTime: string;
  UpdDateTime: string;
  UserCreated: string;
  UserUpdated: string;
}

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
