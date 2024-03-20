import { Injectable } from '@angular/core';
import {ApiService} from "../../../service/api.service";
import {Observable} from "rxjs";
import {Equip} from "../../../core/models/equip.modesl";
import {Child} from '../../../core/models/child.models';

@Injectable({
  providedIn: 'root'
})
export class EquipService {

  constructor(private apiService: ApiService) {}
  getAll(page: number = 0, size: number = 10): Observable<Equip[]> {
    return this.apiService.get(`/api/v1/equip?page=${page}&limit=${size}` );
  }


  getById(id: number): Observable<Equip> {
    return this.apiService.get("/api/v1/equip/${id}");
  }

  create(equip: Equip): Observable<Equip> {
    return this.apiService.post("/api/v1/equip", equip);
  }

  update(id: number, equip: Equip): Observable<Equip> {
    return this.apiService.put("/api/v1/equip/${id}", equip);
  }

  delete(id: number): Observable<void> {
    return this.apiService.delete<void>("/api/v1/equip/${id}");
  }

  public getTotalTeams(): Observable<number> {
    return this.apiService.getTotal();
  }
  getChildrenByEquipId(equipId: number): Observable<Child[]> {
    return this.apiService.get<Child[]>(`/equip/${equipId}/children`);
  }


}
