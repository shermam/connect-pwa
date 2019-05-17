export class AreaModel {
  idArea: number;
  idMill: number;
  Code: string;
  Name: string;
  SubAreas: SubAreaModel[];
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
  Areas: AreaModel[];
}

export class SubAreaModel {
  idSubArea: number;
  idArea: number;
  Code: string;
  Name: string;
  Equipments: EquipmentModel[];
}
