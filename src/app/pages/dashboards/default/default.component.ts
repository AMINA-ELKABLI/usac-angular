import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';
import {EquipService} from "../../Equip/service/equip.service";
import {MatchService} from "../../Match/service/match.service";
import {ChildService} from '../../Child/service/child.service';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  totalTeams: number = 0;
  totalMatch: number = 0;
  acceptedChildrenCount: number = 0;
  childs = [];
  equips = [];
  selectedChildId: number;
  selectedEquipId: number;

  @ViewChild('content') content;
  constructor(private modalService: NgbModal, private configService: ConfigService, private eventService: EventService, private equipService: EquipService , private matchService: MatchService , private childService: ChildService) {
  }

  ngOnInit(): void {
    this.loadTotalTeams();
    this.loadTotalMatch();
    this.loadTotalChild();
    this.getChilds();
    this.getEquips();
  }
  getChilds() {
    this.childService.getAll().subscribe(
      response => {
        this.childs = response.content;
      },
      error => { console.error(error); }
    );
  }


  getEquips() {
    this.equipService.getAll().subscribe(
      data => { this.equips = data; },
      error => { console.error(error); }
    );
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



   changeLayout(layout: string) {
    this.eventService.broadcast('changeLayout', layout);
  }


  private loadTotalChild() {
    this.childService.countAcceptedChildren().subscribe(
      (total: number) =>{
        this.acceptedChildrenCount = total;
      },
      (err) => {
        console.error(err);
      }
    )
  }
}
