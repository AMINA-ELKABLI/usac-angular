import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {MatchService} from '../service/match.service';
import {Match} from '../../../core/models/match.models';
import {Equip} from '../../../core/models/equip.modesl';
import {EquipService} from '../../Equip/service/equip.service';
import {DatePipe} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.scss'],
  providers: [DatePipe]
})
export class AddMatchComponent implements OnInit {

  matchForm!: FormGroup;
  equips: Equip[] = [];
  formattedMatchDate: string | null = null;


  constructor(private fb: FormBuilder,
              private matchService: MatchService,
              private router: Router,
              private equipService: EquipService,
              private datePipe: DatePipe ) {}


  ngOnInit() {
    this.matchForm = this.fb.group({
      name: ['', Validators.required],
      matchDate: ['', Validators.required],
      location: ['', Validators.required],
      type: ['', Validators.required],
      equipOne: ['', Validators.required],
      equipTwo: ['', Validators.required],
    });
    this.loadEquips();
  }

  formatDate(dateString: string): string {
    return this.datePipe.transform(dateString, 'yyyy-MM-dd h:mm a') || '';
  }
  loadEquips() {
    this.equipService.getAll().subscribe({
      next: (data) => {
        this.equips = data;
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  get matchData() {
    return this.matchForm.controls;
  }

  check(){
    if ( this.matchData.equipOne.value === this.matchData.equipTwo){
      Swal.fire({
        title: 'Error  ?',
        text: 'You Can not choosing the same team !',
        icon: 'error',
        showCancelButton: false,
        confirmButtonColor: '#34c38f',
        cancelButtonColor: '#f46a6a',
        confirmButtonText: 'Ok!'
      });
    }
  }
  saveMatch() {
    this.check();
    if (this.matchForm.invalid) {
      return;
    }
    const formValue = this.matchForm.value;
    formValue.matchDate = this.datePipe.transform(formValue.matchDate, 'yyyy-MM-ddT00:00');

    this.matchService.create(formValue).subscribe({
      next: data => {
        alert('Match created successfully');
        this.router.navigate(['/listMatch']);
      },
      error: err => {
        console.error('Error creating match:', err);
      }
    });
  }


}
