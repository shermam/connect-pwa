import { EquipmentModel } from './Equipment.model';

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