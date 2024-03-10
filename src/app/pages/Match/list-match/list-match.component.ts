import { Component, OnInit } from '@angular/core';
import {Stock} from "../../../core/models/stock.models";
import {StockService} from "../../Stock/service/stock.service";
import {Router} from "@angular/router";
import {StockPaginationModel} from "../../../core/models/stock-pagination.model";
import {Match} from "../../../core/models/match.models";
import {MatchService} from "../service/match.service";
import {MatchPaginationModel} from "../../../core/models/MatchPaginationModel.model";

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit {

  match:Array<Match>;
  totalPages: number=0;
  pageSize:number=3;
  currentPage : number = 1;
  totalMatch: number = 0;
  constructor(private matchService: MatchService , private router: Router) {
  }

  ngOnInit(): void {
    this.loadMatch();
    this.loadTotalMatch();
  }
  private loadMatch(): void {
    this.matchService.getAll(this.currentPage, this.pageSize).subscribe(
      (matchs: MatchPaginationModel) => {
        this.match= matchs.content;
        this.totalPages = Math.ceil(this.match.length / this.pageSize);
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteStock(id: number): void {
    if(confirm("You are sur ?"))
      this.matchService.delete(id).subscribe(() => {
        console.log(`Match with ID ${id} deleted successfully.`);
        this.loadMatch();
      });
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


}
