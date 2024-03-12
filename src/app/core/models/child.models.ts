import {Equip} from "./equip.modesl";
import {Play} from "./play.models";
import {MatchChild} from "./matchChild";
import {Gender} from "../enums/Gender";

export class Child {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: Gender;
  address: string;
  guardianName: string;
  guardianContact: string;

}
