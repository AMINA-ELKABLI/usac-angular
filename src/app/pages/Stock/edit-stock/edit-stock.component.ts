import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../core/models/stock.models";
import {StockService} from "../service/stock.service";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {
    stockId!: number;
    stockFormGroup! : FormGroup;
  constructor(private activatedroute: ActivatedRoute, private router: Router, private stockService: StockService , private fb :FormBuilder) { }
  ngOnInit(): void {
    this.stockId=+this.activatedroute.snapshot.params['id'];
    this.stockService.getById(this.stockId).subscribe({
        next:(stock)=>{
          this.stockFormGroup=this.fb.group({
            id            : this.fb.control(stock.id, [Validators.required, Validators.pattern(/^\d+$/)]),
            materialName  : this.fb.control(stock.materialName, [Validators.required]),
            description   : this.fb.control(stock.description, [Validators.required]),
            quantity      : this.fb.control(stock.quantity, [Validators.min(1)]),
            condition      : this.fb.control(stock.condition, [Validators.required]),
          })

        },
      error : error => {
          console.log(error)
      }
    });
  }


  updateStock() {
    let stock : Stock = this.stockFormGroup.value;
    this.stockService.update(stock.id, stock).subscribe({
      next : data=>{
        alert(JSON.stringify(data));
      },
      error: error => {
        console.error('Error updating stock:', error);
      }
    });
  }


}
