import { Component, OnInit } from '@angular/core';
import {EquipService} from "../service/equip.service";
import {Equip} from "../../../core/models/equip.modesl";
import {Router} from "@angular/router";
import {Stock} from "../../../core/models/stock.models";
import {Child} from '../../../core/models/child.models';
import {ChildService} from '../../Child/service/child.service';

@Component({
  selector: 'app-list-equip',
  templateUrl: './list-equip.component.html',
  styleUrls: ['./list-equip.component.scss']
})
export class ListEquipComponent implements OnInit {
  public equips :Array<Equip>=[];
  public keyword : string="";
  totalPages: number=0;
  pageSize:number=3;
  currentPage: number = 1;
  totalTeams: number = 0;
  constructor(private equipService : EquipService, private childService: ChildService , private router: Router) { }

  ngOnInit(): void {
    this.loadEquip();
    this.loadTotalTeams();
  }
  private loadEquip(): void {
    this.equipService.getAll(this.currentPage, this.pageSize).subscribe(
      (equips: Equip[]) => {
        this.equips = equips;
        this.totalPages = Math.ceil(equips.length / this.pageSize);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteStock(id: number): void {
    if(confirm("You are sur ?"))
      this.equipService.delete(id).subscribe(() => {
        console.log(`Stock with ID ${id} deleted successfully.`);
        this.loadEquip();
      });
  }
  navigateToAddEquip() {
    this.router.navigate(['/addEquip']);
  }

  handleGoToPage(page: number) {
    this.currentPage=page;
    this.loadEquip();
  }
  private loadTotalTeams(): void {
    this.equipService.getTotalTeams().subscribe(
      (total: number) => {
        this.totalTeams = total;
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
