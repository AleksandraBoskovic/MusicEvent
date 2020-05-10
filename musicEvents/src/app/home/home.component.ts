import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { EventsService } from '../service/events.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Array<Event>;




  currentType = 'tehno';

  constructor(private eventService: EventsService) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {

  }

  changeType(currentType: string) {

    this.currentType = currentType;

    this.events = this.eventService.filterEvents(this.currentType);


  }




}
