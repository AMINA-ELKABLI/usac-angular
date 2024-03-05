import { Component, OnInit } from '@angular/core';
import {EquipService} from "../service/equip.service";

@Component({
  selector: 'app-list-equip',
  templateUrl: './list-equip.component.html',
  styleUrls: ['./list-equip.component.scss']
})
export class ListEquipComponent implements OnInit {
  public keyword : string="";
  constructor(private equipService : EquipService) { }

  ngOnInit(): void {
  }

}
