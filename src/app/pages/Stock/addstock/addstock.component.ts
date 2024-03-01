import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {StockService} from "../service/stock.service";
import {Stock} from "../../../core/models/stock.models";

@Component({
  selector: 'app-addstock',
  templateUrl: './addstock.component.html',
  styleUrls: ['./addstock.component.scss']
})
export class AddstockComponent implements OnInit {
  stockForm!: FormGroup;


  constructor(private fb: FormBuilder, private stockService: StockService) {}

  ngOnInit() {
    this.stockForm = this.fb.group({
      materialName: ['', Validators.required],
      description: ['', Validators.required],
      quantity: ['', Validators.required],
      condition: ['', Validators.required],

    });
  }

  saveStock() {


    if (this. stockForm.invalid) {
      return;
    }

    let stock: Stock = this.stockForm.value;
    console.log("###### stock ",stock);
    this.stockService.create(stock).subscribe({
      next: data => {
        alert(JSON.stringify(data));
      },
      error: err => {
        console.log(err);
      }
    });
  }
}
