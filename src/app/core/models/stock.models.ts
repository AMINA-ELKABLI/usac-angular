import {MaterialCondition} from "../enums/MaterialCondition";

export class Stock {
  id: number;
  materialName: string;
  description: string;
  quantity: number;
  condition: MaterialCondition;
}
