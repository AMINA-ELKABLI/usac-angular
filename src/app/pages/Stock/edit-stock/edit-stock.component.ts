import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../core/models/stock.models";
import {StockService} from "../service/stock.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.scss']
})
export class EditStockComponent implements OnInit {
  stock: Stock = { id: 0, materialName: '', description: '', quantity: 0, condition: '' };
  constructor(private route: ActivatedRoute, private router: Router, private stockService: StockService) { }
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.loadStock(id);
      }
    });
  }
  loadStock(id: number): void {
    this.stockService.getById(id).subscribe(
      (stock: Stock) => {
        this.stock = stock;
      },
      (error) => {
        console.error('Error loading stock:', error);
      }
    );
  }
  updateStock(): void {
    this.stockService.update(this.stock.id, this.stock).subscribe(
      () => {
        console.log('Stock updated successfully');
        this.router.navigate(['/listStock']);
      },
      (error) => {
        console.error('Error updating stock:', error);
      }
    );
  }

}
