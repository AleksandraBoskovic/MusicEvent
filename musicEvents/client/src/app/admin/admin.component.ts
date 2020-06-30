import { Msg } from './../../models/msg.model';
import { EventServerInt } from './../../models/eventServerInt.model';
import { EventInt } from './../../models/eventInt.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { EventsService } from '../service/events.service';
import { Observable, observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  private readonly createEventUrl = 'http://localhost:3000/events/';
  private readonly deleteEventUrl = 'http://localhost:3000/events/deleteByInfo';
  private eventFromServer : EventInt = null;

  public checkoutForm: FormGroup;
  public checkoutFormDelete: FormGroup;
  public checkoutFormChange: FormGroup;

  events: Event[] = [];


  constructor(private eventService: EventsService,private formBuilder : FormBuilder ,private http : HttpClient){
    this.events = this.eventService.getEvents();

    this.checkoutForm = this.formBuilder.group({
      event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      adress: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z /]+')]],
      date: ['', [Validators.required, Validators.pattern('((0?[1-9]|[12][1-9]|30|31)[.](0[1-9]|1[012])[.]202[0-9])|((0?[1-9]|[12][1-9]|30|31)[/](0[1-9]|1[012])[/]202[0-9])')]],
      typeMusic: ['', [Validators.required, Validators.pattern('pop|rok|tehno|domaca|dance')]],
      freeEntrance: ['', [Validators.required, Validators.pattern('jeste|nije')]],
      price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      typeEvent: ['', [Validators.required, Validators.pattern('koncert|humanitarni koncert|svirka|festival|kafana|klub')]],
      performer: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      capacity: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });

    this.checkoutFormDelete = this.formBuilder.group({
      event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      adress: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z /]+')]],
      date: ['', [Validators.required, Validators.pattern('((0?[1-9]|[12][1-9]|30|31)[.](0[1-9]|1[012])[.]202[0-9])|((0?[1-9]|[12][1-9]|30|31)[/](0[1-9]|1[012])[/]202[0-9])')]],
    });

    this.checkoutFormChange = this.formBuilder.group({
      event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      date: ['', [Validators.required, Validators.pattern('((0?[1-9]|[12][1-9]|30|31)[.](0[1-9]|1[012])[.]202[0-9])|((0?[1-9]|[12][1-9]|30|31)[/](0[1-9]|1[012])[/]202[0-9])')]],
      typeMusic: ['', [Validators.required, Validators.pattern('pop|rok|tehno|domaca|dance')]],
      freeEntrance: ['', [Validators.required, Validators.pattern('jeste|nije')]],
      price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      performer: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    });
  }

  ngOnInit() {
  }

  public get event() {
    return this.checkoutForm.get('event');
  }

  public get adress() {
    return this.checkoutForm.get('adress');
  }

  public get date() {
    return this.checkoutForm.get('date');
  }

  public get eventDelete() {
    return this.checkoutFormDelete.get('event');
  }

  public get adressDelete() {
    return this.checkoutFormDelete.get('adress');
  }

  public get dateDelete() {
    return this.checkoutFormDelete.get('date');
  }

  public get eventChange() {
    return this.checkoutFormChange.get('event');
  }


  public get dateChange() {
    return this.checkoutFormChange.get('date');
  }


  public get typeMusic() {
    return this.checkoutForm.get('typeMusic');
  }

  public get typeMusicChange() {
    return this.checkoutFormChange.get('typeMusic');
  }

  public get freeEntrance() {
    return this.checkoutForm.get('freeEntrance');
  }
  public get price() {
    return this.checkoutForm.get('price');
  }

  public get freeEntranceChange() {
    return this.checkoutFormChange.get('freeEntrance');
  }
  public get priceChange() {
    return this.checkoutFormChange.get('price');
  }
  public get typeEvent() {
    return this.checkoutForm.get('typeEvent');
  }
  public get performer() {
    return this.checkoutForm.get('performer');
  }

  public get performerChange() {
    return this.checkoutFormChange.get('performer');
  }


  public get capacity() {
    return this.checkoutForm.get('capacity');
  }


  onAddEvent(data) {

    const body = {
      "nazivDog" : this.event.value,
      "adresa" :this.adress.value ,
      "datum" : this.date.value,
      "vrstaMuzike" : this.typeMusic.value,
      "slobodanUlaz" : this.freeEntrance.value,
      "cena" : this.price.value,
      "vrstaDogadjaja" : this.typeEvent.value,
      "izvodjac" : this.performer.value,
      "kapacitet" : this.capacity.value
    };

    const eventFromServer  : Observable<EventServerInt> =
        this.http.post<EventServerInt>(this.createEventUrl,body);
    eventFromServer.subscribe(
      (data : EventServerInt) => {
          this.eventFromServer = data.events;
          console.log(this.eventFromServer);
          window.alert("Event added!");
      },
      (err) => {window.alert("Something went wrong!");}
    );


    };



  onDeleteEvent(data) {
    const body = {
           nazivDog :this.eventDelete.value,
          adresa : this.adressDelete.value,
        datum : this.dateDelete.value
         }

         this.http.post(this.deleteEventUrl,body).subscribe(
              (msg : Msg) => {window.alert(msg.message);},
              (err) => {window.alert("Something went wrong!");}
             );

  };



  onChangeEvent(data) {

    // this.event = this.eventService.changeEvent(i_naziv, i_datum, i_muzika, i_cena, i_izvodjac);

  };

}
