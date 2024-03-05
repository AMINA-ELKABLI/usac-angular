import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {Stock} from "../../../core/models/stock.models";

@Injectable({
  providedIn: 'root'
})
export class StockService {

  public keyword : string="";
  constructor(private apiService: ApiService) {}
  getAll(page: number = 1, size: number = 10): Observable<Stock[]> {
    return this.apiService.get(`/api/v1/stock?page=${page}&limit=${size}`);
  }


  getById(id: number): Observable<Stock> {
    return this.apiService.get<Stock>("/api/v1/stock/${id}");
  }

  create(stock: Stock): Observable<Stock> {
    return this.apiService.post<Stock>("/api/v1/stock", stock);
  }

  update(id: number, stock: Stock): Observable<Stock> {
    return this.apiService.put<Stock>("/api/v1/stock/${id}", stock);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>("/api/v1/stock/${id}");
  }


}
