import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../core/models/stock.models";
import {StockService} from "../service/stock.service";

@Component({
  selector: 'app-liststock',
  templateUrl: './liststock.component.html',
  styleUrls: ['./liststock.component.scss']
})
export class ListstockComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private stockService: StockService) {
  }

  ngOnInit(): void {
    this.loadStock();

  }

  private loadStock(): void {
    this.stockService.getAll().subscribe(stocks => {
      console.log("stocks  = ", stocks)
      this.stocks = stocks;
    });
  }

  deleteAgency(id: number): void {
    if(confirm("You are sur ?"))
      this.stockService.delete(id).subscribe(() => {
        console.log(`Stock with ID ${id} deleted successfully.`);
        this.loadStock();
      });
  }



}
