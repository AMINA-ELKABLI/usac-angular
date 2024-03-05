import {Child} from "./child.models";
import {Match} from "./match.models";

export class Play {
  id: number;
  name: string;
  description: string;
  schedule: string;
  maxCapacity: number;
  children: Child[];
  match: Match;
}
