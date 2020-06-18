import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { EventsService } from '../service/events.service';
import { Filter } from './../../models/filter.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Event [];

  currentFilter = new Filter('tehno',false, '',false, '',false, '0',false, '10000',false);


  constructor(private eventService: EventsService) {
  //  this.eventService.getEvents().subscribe(
  //    events => this.events = events,
  //    error => console.log(error)
  //  );
   this.events = this.eventService.getEvents();
  }

  ngOnInit() {

  }

  changeType(currentFilter: Filter) {
    this.currentFilter = currentFilter;
    this.events = this.eventService.filterEvents(this.currentFilter);
  }

  giveAll(give: string) {
    // this.eventService.getEvents().subscribe(
    //   events => this.events = events
    // );
    this.events = this.eventService.getEvents();
  }



}
