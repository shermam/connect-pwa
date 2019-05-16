export class AreaModel {
  idArea: number;
  idMill: number;
  Code: string;
  Name: string;
}

export class EquipmentModel {
  idEquipment: number;
  idSubArea: number;
  Code: string;
  Name: string;
}

export class MillModel {
  idMill: number;
  Code: string;
  Name: string;
}

export class SubAreaModel {
  idSubArea: number;
  idArea: number;
  Code: string;
  Name: string;
}
