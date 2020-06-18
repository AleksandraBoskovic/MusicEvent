import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';

import { EventsService } from '../service/events.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  events: Array<Event> = [];

  public checkoutForm: FormGroup;
  public checkoutFormDelete: FormGroup;
  public checkoutFormChange: FormGroup;

  constructor(private eventService: EventsService, private formBuilder: FormBuilder) {
    // this.eventService.getEvents().subscribe(
    //   events => this.events = events
    // );
    this.events = this.eventService.getEvents();
    this.checkoutForm = this.formBuilder.group({
      event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      adress: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z /]+')]],
      date: ['', [Validators.required, Validators.pattern('[0-9\/]+')]],
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
      date: ['', [Validators.required, Validators.pattern('[0-9\/]+')]],
    });

    this.checkoutFormChange = this.formBuilder.group({
      event: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]],
      date: ['', [Validators.required, Validators.pattern('[0-9\/]+')]],
      typeMusic: ['', [Validators.required, Validators.pattern('pop|rok|tehno|domaca|dance')]],
      freeEntrance: ['', [Validators.required, Validators.pattern('jeste|nije')]],
      price: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      performer: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    });



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
    this.events = this.eventService.addEvent(this.event.value, this.adress.value,
      this.date.value, this.typeMusic.value, this.freeEntrance.value,
      this.price.value, this.typeEvent.value, this.performer.value, this.capacity.value);
  }
  ngOnInit() {

  }


  onDeleteEvent(data) {
    this.events = this.eventService.deleteEvent(this.eventDelete.value, this.adressDelete.value,
      this.dateDelete.value);
  }

  onChangeEvent(data) {

    this.events = this.eventService.changeEvent(this.eventChange.value,
      this.dateChange.value, this.typeMusicChange.value,
      this.freeEntranceChange.value, this.priceChange.value, this.performerChange.value);


  }

}
