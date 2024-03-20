import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {EquipService} from "../service/equip.service";
import {Equip} from "../../../core/models/equip.modesl";
import {Child} from '../../../core/models/child.models';
import {ChildService} from '../../Child/service/child.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-equip',
  templateUrl: './add-equip.component.html',
  styleUrls: ['./add-equip.component.scss']
})
export class AddEquipComponent implements OnInit {
  equipForm!: FormGroup;
  public children: Child[] = [];

  constructor(private fb: FormBuilder,
              private equipService: EquipService,
              private childService: ChildService,
              private router: Router
              ) {
    this.equipForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(500)]],
      childIds: [[], Validators.required],
    });
  }


  ngOnInit() {
    this.loadAcceptedChildren();
  }
  loadAcceptedChildren() {
    this.childService.getAcceptedChildren().subscribe(
      (data) => {
        this.children = data;
      },
      (error) => {
        console.error('Error loading accepted children', error);
      }
    );
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

  protected readonly Child = Child;
}
