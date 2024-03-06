import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../core/models/stock.models";
import {StockService} from "../service/stock.service";
import {Router} from "@angular/router";
import {HttpResponse} from "@angular/common/http";

@Component({
  selector: 'app-liststock',
  templateUrl: './liststock.component.html',
  styleUrls: ['./liststock.component.scss']
})
export class ListstockComponent implements OnInit {

  stocks: Stock[] = [];
  totalPages: number=0;
  pageSize:number=3;
  currentPage : number = 1;

  constructor(private stockService: StockService , private router: Router) {
  }

  ngOnInit(): void {
    this.loadStock();

  }
  private loadStock(): void {
    this.stockService.getAll(this.currentPage, this.pageSize).subscribe(
      (stocks: Stock[]) => {
        this.stocks = stocks;
        this.totalPages = Math.ceil(stocks.length / this.pageSize);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteStock(id: number): void {
    if(confirm("You are sur ?"))
      this.stockService.delete(id).subscribe(() => {
       console.log(`Stock with ID ${id} deleted successfully.`);
        this.loadStock();
      });
  }
  searchStock(keyword: string): void {
    this.stockService.keyword = keyword;
    this.loadStock();
  }

  editStock(stock: Stock): void {
    this.router.navigate([`/editStock/${stock.id}` ]);
  }

  navigateToAddStock() {
    this.router.navigate(['/addStock'])
  }

  handleGoToPage(page: number) {
    this.currentPage=page;
    this.loadStock();
  }


}
