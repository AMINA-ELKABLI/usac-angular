
import {Gender} from "../enums/Gender";
import {Status} from '../enums/Status';

export class Child {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  guardianName: string;
  guardianContact: string;
  status: Status;

}
