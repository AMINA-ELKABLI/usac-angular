import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipService} from "../../Equip/service/equip.service";
import {ChildService} from "../service/child.service";
import {Equip} from "../../../core/models/equip.modesl";
import {Child} from "../../../core/models/child.models";

@Component({
  selector: 'app-add-child',
  templateUrl: './add-child.component.html',
  styleUrls: ['./add-child.component.scss']
})
export class AddChildComponent implements OnInit {
  childForm!: FormGroup;
  constructor(private fb: FormBuilder, private childService: ChildService) { }

  ngOnInit(){
    this.childForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      guardianName: ['', Validators.required],
      guardianContact: ['', Validators.required]
    });
  }

  saveChild() {


    if (this. childForm.invalid) {
      return;
    }

    let child: Child = this.childForm.value;
    console.log("###### child ",child);
    this.childService.create(child).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    });
  }

}
