import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StockService} from "../../Stock/service/stock.service";
import {Stock} from "../../../core/models/stock.models";
import {EquipService} from "../service/equip.service";
import {Equip} from "../../../core/models/equip.modesl";

@Component({
  selector: 'app-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrls: ['./add-equip.component.scss']
})
export class AddEquipComponent implements OnInit {
  equipForm!: FormGroup;


  constructor(private fb: FormBuilder, private equipService: EquipService) {}


  ngOnInit() {
    this.equipForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],


    });
  }

  saveEquip() {


    if (this. equipForm.invalid) {
      return;
    }

    let equip: Equip = this.equipForm.value;
    console.log("###### equip ",equip);
    this.equipService.create(equip).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
