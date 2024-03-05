import {Equip} from "./equip.modesl";
import {Play} from "./play.models";
import {MatchChild} from "./matchChild";

export class Child {
  id: number;
  name: string;
  dateOfBirth: string;
  gender: string;
  address: string;
  guardianName: string;
  guardianContact: string;
  plays: Play[];
  matchChildren: MatchChild[];
  equip: Equip;
}
