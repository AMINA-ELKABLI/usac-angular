import {Equip} from './equip.modesl';


export class Match {
  id: number;
  name: string;
  matchDate: string;
  location: string;
  type: string;
  equips: Equip[];
}
