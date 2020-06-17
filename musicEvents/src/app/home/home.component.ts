import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { EventsService } from '../service/events.service';
import {Filter} from './../../models/filter.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Array<Event>;

  currentFilter = new Filter('tehno','','','0','10000');




  // currentType = 'tehno';
  // currentTypeEntrance : string;
  // currentTypeEvent: string ;

  constructor(private eventService: EventsService) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {

  }

  changeType(currentFilter: Filter) {

    // this.currentType = currentType;
    // this.currentTypeEvent = currentTypeEvent;
    // this.currentTypeEntrance = currentTypeEntrance;

    this.currentFilter = currentFilter;

    this.events = this.eventService.filterEvents(this.currentFilter);

    // for (let i of this.events) {
    //   console.log(i);
    // }

    // currentTypeEntrance= undefined;
    // currentTypeEvent= undefined;
  }

  giveAll(give: string){

this.events = this.eventService.getEvents();
  }




}
