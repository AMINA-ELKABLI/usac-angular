import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {StockPaginationModel} from "../../../core/models/stock-pagination.model";
import {HttpParams} from "@angular/common/http";
import {Stock} from "../../../core/models/stock.models";
import {Child} from "../../../core/models/child.models";
import {PageResponse} from "../../../core/models/PageResponse";

@Injectable({
  providedIn: 'root'
})
export class ChildService {


  public keyword : string="";
  constructor(private apiService: ApiService) {}
  getAll(page: number = 0, size: number = 10): Observable<PageResponse<Child>> {
    let params = new HttpParams().set('page', page.toString()).set('size', size.toString()).set('keyword', this.keyword);
    return this.apiService.get<PageResponse<Child>>('/api/v1/child', { params: params });
  }



  create(child: Child): Observable<Child> {
    return this.apiService.post<Child>("/api/v1/child", child);
  }


  getById(id: number): Observable<Stock> {
    return this.apiService.get<Stock>(`/api/v1/stock/${id}`);
  }

  update(id: number, stock: Stock): Observable<Stock> {
    return this.apiService.put<Stock>(`/api/v1/child/${id}`, stock);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/v1/child/${id}`);
  }
}
