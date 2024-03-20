import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CalendarOptions, EventApi} from "@fullcalendar/angular";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

import {MatchService} from '../../Match/service/match.service';
import {EventInput} from '@fullcalendar/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements  OnInit {
  breadCrumbItems: Array<{}> = [
    { label: 'Home', path: '/' },
    { label: 'Calendar', path: '/', active: true }
  ];
  calendarOptions: CalendarOptions;
  formData: FormGroup;
  formEditData: FormGroup;
  localEvents: EventInput[] = [];
  submitted = false;
  @ViewChild('modalShow') modalShow: TemplateRef<any>;
  @ViewChild('editmodalShow') editmodalShow: TemplateRef<any>;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder,
    private matchService: MatchService
  ) {}

  ngOnInit(): void {
    this.formData = this.formBuilder.group({
      title: ['', [Validators.required]],

    });

    this.formEditData = this.formBuilder.group({
      editTitle: ['', [Validators.required]],

    });

    this.initializeCalendarOptions();
    this.loadMatches();
  }

  private initializeCalendarOptions() {
    this.calendarOptions = {
      initialView: 'dayGridMonth',
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      themeSystem: 'bootstrap',
      weekends: true,
      editable: true,
      selectable: true,
      selectMirror: true,
      dayMaxEvents: true,
      events: this.localEvents,
    };
  }

  private loadMatches() {
    this.matchService.getAll().subscribe(matchPaginationModel => {
      this.localEvents = matchPaginationModel.content.map(match => ({
        id: match.id.toString(),
        title: match.name,
        start: match.matchDate,
      }));
      this.calendarOptions.events = this.localEvents;
    });
  }

  openModal() {
    this.modalService.open(this.modalShow);
  }

  closeEventModal() {
    this.modalService.dismissAll();
  }

  saveEvent() {
    this.submitted = true;
    if (this.formData.valid) {
      const newEvent: EventInput = {
        id: Date.now().toString(),
        title: this.formData.value.title,
        start: new Date().toISOString(),
      };
      this.localEvents.push(newEvent);
      this.calendarOptions.events = this.localEvents;
      this.modalService.dismissAll();
    }
  }

  editEventSave() {
    if (this.formEditData.valid) {
      // Exemple de mise à jour d'un événement existant.
      // Vous aurez besoin d'une logique pour identifier et mettre à jour l'événement correct dans `localEvents`.
      const eventIndex = this.localEvents.findIndex(event => event.id === "idDeLevenementAEditer"); // Assurez-vous de remplacer par la logique appropriée pour trouver l'ID
      if (eventIndex !== -1) {
        const updatedEvent = { ...this.localEvents[eventIndex], ...{
            title: this.formEditData.value.editTitle,

            // Mettez à jour d'autres propriétés de l'événement si nécessaire
          }};
        this.localEvents[eventIndex] = updatedEvent;
        this.calendarOptions.events = this.localEvents; // Mettez à jour les événements du calendrier
      }
      this.modalService.dismissAll(); // Fermez le modal après la mise à jour
    }
  }


  // Méthode d'exemple pour montrer une boîte de dialogue de confirmation
  confirm() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#34c38f',
      cancelButtonColor: '#f46a6a',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.value) {
        // Implémentez la logique pour supprimer un événement
        Swal.fire('Deleted!', 'Your event has been deleted.', 'success');
      }
    });
  }
}
