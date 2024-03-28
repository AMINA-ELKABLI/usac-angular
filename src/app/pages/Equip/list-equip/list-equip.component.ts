import { Component, OnInit } from '@angular/core';
import {EquipService} from "../service/equip.service";
import {Equip} from "../../../core/models/equip.modesl";
import {Router} from "@angular/router";
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
  pageSize:number=10;
  currentPage: number = 1;
  totalTeams: number = 0;
  constructor(private equipService : EquipService, private childService: ChildService , private router: Router) { }

  ngOnInit(): void {
    this.loadEquip();
    this.loadTotalTeams();
  }
  private loadEquip(): void {
    this.equipService.getAll(this.currentPage - 1, this.pageSize).subscribe(
      (equips: Equip[]) => {
        this.equips = equips;

      },
      (err) => {
        console.log(err);
      }
    );
  }
  deleteEquip(id: number): void {
    if(confirm("You are sur ?"))
      this.equipService.delete(id).subscribe(() => {
        console.log(`Team with ID ${id} deleted successfully.`);
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
        this.totalPages = Math.ceil(this.totalTeams / this.pageSize);
      },
      (err) => {
        console.error(err);
      }
    );
  }

}
