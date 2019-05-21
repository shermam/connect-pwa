import { ReasonModel } from './Reason.model';

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