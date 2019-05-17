export class MillModel {
  id: number;
  code: string;
  name: string;
  area: AreaModel[];
}
export class AreaModel {
  id: number;
  idMill: number;
  code: string;
  name: string;
  subArea: SubAreaModel[];
}
export class SubAreaModel {
  id: number;
  idArea: number;
  code: string;
  name: string;
  equipment: EquipmentModel[];
}

export class EquipmentModel {
  id: number;
  idSubArea: number;
  code: string;
  name: string;
}
