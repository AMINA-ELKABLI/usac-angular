import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {Stock} from "../../../core/models/stock.models";
import {Equip} from "../../../core/models/equip.modesl";

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  constructor(private apiService: ApiService) {}
  getAll(page: number = 1, size: number = 10): Observable<Equip[]> {
    return this.apiService.get(`/api/v1/equip?page=${page}&limit=${size}` );
  }


  getById(id: number): Observable<Equip> {
    return this.apiService.get<Equip>("/api/v1/equip/${id}");
  }

  create(equip: Equip): Observable<Equip> {
    return this.apiService.post<Equip>("/api/v1/equip", equip);
  }

  update(id: number, equip: Equip): Observable<Equip> {
    return this.apiService.put<Equip>("/api/v1/equip/${id}", equip);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>("/api/v1/equip/${id}");
  }

}
