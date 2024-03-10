import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {StockPaginationModel} from "../../../core/models/stock-pagination.model";
import {HttpParams} from "@angular/common/http";
import {Stock} from "../../../core/models/stock.models";
import {Match} from "../../../core/models/match.models";
import {MatchPaginationModel} from "../../../core/models/MatchPaginationModel.model";



@Injectable({
  providedIn: 'root'
})
export class MatchService {

  public keyword : string="";
  constructor(private apiService: ApiService) {}
  getAll(page: number = 1, size: number = 10): Observable<MatchPaginationModel> {
    let params = new HttpParams().set('page', page.toString()).set('limit', size.toString()).set('keyword', this.keyword);
    return this.apiService.get(`/api/v1/match`, {params: params});
  }



  create(match: Match): Observable<Match> {
    return this.apiService.post<Match>("/api/v1/match", match);
  }


  getById(id: number): Observable<Match> {
    return this.apiService.get<Match>(`/api/v1/match/${id}`);
  }

  update(id: number, match: Match): Observable<Match> {
    return this.apiService.put<Match>(`/api/v1/match/${id}`, match);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/v1/match/${id}`);
  }
  public getTotalMatch(): Observable<number> {
    return this.apiService.getTotal();
  }

}
