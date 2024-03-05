import {Play} from "./play.models";
import {MatchEquip} from "./matchEquip";

export class Match {
  id: number;
  name: string;
  matchDate: string;
  location: string;
  type: string;
  plays: Play[];
  matchEquips: MatchEquip[];
}
