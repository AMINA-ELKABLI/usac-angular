import {Match} from "./match.models";
import {Child} from "./child.models";

export class MatchChild {
  id: number;
  match: Match;
  child: Child;
  role: string;
}
