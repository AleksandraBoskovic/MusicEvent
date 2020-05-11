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
  currentTypeEntrance : string;
  currentTypeEvent: string ;

  constructor(private eventService: EventsService) {
    this.events = this.eventService.getEvents();
  }

  ngOnInit() {

  }

  changeType({currentType, currentTypeEvent, currentTypeEntrance}) {

    this.currentType = currentType;
    this.currentTypeEvent = currentTypeEvent;
    this.currentTypeEntrance = currentTypeEntrance;

    this.events = this.eventService.filterEvents(this.currentType,this.currentTypeEvent,this.currentTypeEntrance);

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
