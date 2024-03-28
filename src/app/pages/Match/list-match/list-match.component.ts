import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Match} from "../../../core/models/match.models";
import {MatchService} from "../service/match.service";
import {MatchPaginationModel} from "../../../core/models/MatchPaginationModel.model";
import {Child} from '../../../core/models/child.models';
import {EquipService} from '../../Equip/service/equip.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-list-match',
  templateUrl: './list-match.component.html',
  styleUrls: ['./list-match.component.scss']
})
export class ListMatchComponent implements OnInit {
  match: Array<Match> = [];
  selectedEquipChildren: Child[] = [];
  totalPages: number=0;
  pageSize:number=10;
  currentPage: number = 1;
  totalMatch: number = 0;
  amina: number;
  aminaForm: FormGroup ;
  constructor(private matchService: MatchService ,
              private equipService: EquipService,
              private router: Router,
              private modalService: NgbModal,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.aminaForm = this.formBuilder.group({
      litchi: ['', [ Validators.required]]
    });
    this.loadMatch();
    this.loadTotalMatch();
  }
  private loadMatch(): void {
    this.matchService.getAll(this.currentPage, this.pageSize).subscribe(
      (matchs: MatchPaginationModel) => {
        this.match = matchs.content;
        this.totalPages = Math.ceil(this.totalMatch / this.pageSize);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  get getID(){
    return this.aminaForm.controls;
  }
  // Make sure to adjust your openChildrenModal method accordingly:
  openChildrenModal(content: any, equipId: number) {
    this.aminaForm.get('litchi').setValue(equipId); // Set the form control value programmatically
    this.modalService.open(content, { centered: true }).result.then((result) => {
      // Handle modal close result if needed
    }, (reason) => {
      // Handle modal dismiss if needed
    });
    console.log(equipId + "-----");
    // After setting the value, fetch the children for the given equipId
    this.fetchChildrenForEquip(equipId); // Implement this method to fetch children and update selectedEquipChildren
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
    this.currentPage = page;
    this.loadMatch();
  }
  private loadTotalMatch(): void {
    this.matchService.getTotalMatch().subscribe(
      (total: number) => {
        this.totalMatch = total;
        this.totalPages = Math.ceil(this.totalMatch / this.pageSize);
      },
      (err) => {
        console.error(err);
      }
    );
  }
  fetchChildrenForEquip(equipId: number) {
    this.equipService.getChildrenByEquipId(equipId).subscribe(children => {
      console.log(children);
      this.selectedEquipChildren = children;
    });
  }
}
