import {Child} from "./child.models";
import {MatchEquip} from "./matchEquip";


export class Equip {
  id: number;
  name: string;
  description: string;
  children: Child[];
  matchEquips: MatchEquip[];

}
