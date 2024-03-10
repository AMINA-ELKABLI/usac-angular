import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EventService } from '../../../core/services/event.service';

import { ConfigService } from '../../../core/services/config.service';
import {EquipService} from "../../Equip/service/equip.service";
import {MatchService} from "../../Match/service/match.service";

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {

  totalTeams: number = 0;
  totalMatch: number = 0;

  @ViewChild('content') content;
  constructor(private modalService: NgbModal, private configService: ConfigService, private eventService: EventService, private equipService: EquipService , private matchService: MatchService) {
  }

  ngOnInit(): void {
    this.loadTotalTeams();
    this.loadTotalMatch();
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


}
