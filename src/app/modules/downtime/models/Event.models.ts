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

export class ClassModel {
  id: number;
  code: string;
  name: string;
  group: GroupModel[];
}
export class GroupModel {
  id: number;
  code: string;
  name: string;
  idClass: number;
  reason: ReasonModel[];
}
export class ReasonModel {
  id: number;
  code: string;
  name: string;
  idGroup: number;
}
