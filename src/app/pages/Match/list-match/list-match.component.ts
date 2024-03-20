import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Match} from "../../../core/models/match.models";
import {MatchService} from "../service/match.service";
import {MatchPaginationModel} from "../../../core/models/MatchPaginationModel.model";
import {Child} from '../../../core/models/child.models';
import {EquipService} from '../../Equip/service/equip.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit {
  match: Array<Match> = [];
  selectedEquipChildren: Child[] = [];
  totalPages: number=0;
  pageSize:number=3;
  currentPage: number = 1;
  totalMatch: number = 0;
  amina: number;
  constructor(private matchService: MatchService ,
              private equipService: EquipService,
              private router: Router,
              private modalService: NgbModal) {
  }

  ngOnInit(): void {
    this.loadMatch();
    this.loadTotalMatch();
  }
  private loadMatch(): void {
    this.matchService.getAll(this.currentPage, this.pageSize).subscribe(
      (matchs: MatchPaginationModel) => {
        this.match = matchs.content;
        this.totalPages = Math.ceil(this.match.length / this.pageSize);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  openChildrenModal(content: any) {
      this.modalService.open(content, { centered: true });
  }


  searchMatch(keyword: string): void {
    this.matchService.keyword = keyword;
    this.loadMatch();
  }

  editMatch(match: Match): void {
    this.router.navigate([`/editMatch/${match.id}` ]);
  }

  navigateToAddMatch() {
    this.router.navigate(['/addMatch'])
  }

  handleGoToPage(page: number) {
    this.currentPage=page;
    this.loadMatch();
  }
  private loadTotalMatch(): void {
    this.matchService.getTotalMatch().subscribe(
      (total: number) => {
        this.totalMatch = total;
      },
      (err) => {
        console.error(err);
      }
    );
  }
  test() {
    console.log(this.amina);
    this.equipService.getChildrenByEquipId(this.amina).subscribe(children => {
      this.selectedEquipChildren = children;
  });
  }
}
