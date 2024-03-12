import { Component, OnInit } from '@angular/core';
import {Child} from "../../../core/models/child.models";
import {ChildService} from "../service/child.service";
import {Status} from '../../../core/enums/Status';

@Component({
  selector: 'app-list-childs',
  templateUrl: './list-childs.component.html',
  styleUrls: ['./list-childs.component.scss']
})
export class ListChildsComponent implements OnInit {
  childs: Child[] = [];
  currentPage: number = 0;
  pageSize: number = 10;
  totalItems: number = 0;
  constructor(private childService: ChildService) { }

  ngOnInit(): void {
    this.getAllChilds();
  }

  getAllChilds(): void {
    this.childService.getAll(this.currentPage, this.pageSize).subscribe(response => {
      this.childs = response.content;
      this.totalItems = response.totalElements;
    });
  }

  onPageChange(page: number): void {
    this.currentPage = page;
    this.getAllChilds();
  }

  deleteChild(id: number) {

  }
  updateChildStatus(id: number, newStatus: Status) {
    this.childService.updateStatus(id, newStatus).subscribe({
      next: updatedChild => {
        console.log('Statut mis à jour', updatedChild);
      },
      error: error => {
        console.error('Erreur lors de la mise à jour du statut', error);
      }
    });
  }

}
