import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { EventsService } from '../service/events.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events: Array<Event> ;

  types = ['pop','rok','tehno','domaca','dance'];
  currentType = 'tehno';

  constructor(private eventService: EventsService) {
    this.events = this.eventService.getEvents();
   }

  ngOnInit() {
  }

  changeToDance(newType: string): void {
    this.currentType = newType;
  }

}
