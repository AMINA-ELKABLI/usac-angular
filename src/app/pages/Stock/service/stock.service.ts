import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {Stock} from "../../../core/models/stock.models";
import {HttpParams} from "@angular/common/http";
import {StockPaginationModel} from "../../../core/models/stock-pagination.model";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public keyword : string="";
  constructor(private apiService: ApiService) {}
  getAll(page: number = 1, size: number = 10): Observable<StockPaginationModel> {
    let params = new HttpParams().set('page', page.toString()).set('limit', size.toString()).set('keyword', this.keyword);
    return this.apiService.get(`/api/v1/stock`, {params: params});
  }



  create(stock: Stock): Observable<Stock> {
    return this.apiService.post<Stock>("/api/v1/stock", stock);
  }


  getById(id: number): Observable<Stock> {
    return this.apiService.get<Stock>(`/api/v1/stock/${id}`);
  }

  update(id: number, stock: Stock): Observable<Stock> {
    return this.apiService.put<Stock>(`/api/v1/stock/${id}`, stock);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/v1/stock/${id}`);
  }

}
