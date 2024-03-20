import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";

import {HttpParams} from "@angular/common/http";

import {Child} from "../../../core/models/child.models";
import {PageResponse} from "../../../core/models/PageResponse";
import {Status} from '../../../core/enums/Status';

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


  getById(id: number): Observable<Child> {
    return this.apiService.get<Child>(`/api/v1/child/${id}`);
  }
  updateStatus(id: number, status: Status): Observable<Child> {
    return this.apiService.put<Child>(`/api/v1/child/${id}/status`, { status });
  }


  delete(id: number): Observable<void> {
    return this.apiService.delete<void>(`/api/v1/child/${id}`);
  }

  countAcceptedChildren(): Observable<number> {
    return this.apiService.get<number>('/api/v1/child/count/accepted');
  }

  getAcceptedChildren(): Observable<Child[]> {
    return this.apiService.get<Child[]>('/api/v1/child/accepted');
  }



}
