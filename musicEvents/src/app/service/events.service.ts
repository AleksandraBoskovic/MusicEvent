import { Injectable } from '@angular/core';
import { Event } from '../../models/event.model';
import {Filter} from './../../models/filter.model';
@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[];


  constructor() {
    this.events = [new Event('Beer fest', 'Usce', '20.08.2020', 'rok', 'jeste', '0',
      'koncert', 'Riblja corba', 3), new Event('Ceca Music', 'Usce', '20.08.2020', 'pop', 'nije', '3000',
        'humanitarni koncert', 'Ceca', 10000), new Event('Humanitarni koncert', 'Sava centar', '12.05.2020', 'pop', 'jeste', '2000',
          'koncert', 'Sasa Kovacevic', 10000)];

  }


  public getEvents(): Event[] {
    return this.events;
  }

  public addEvent(event: string, adress: string,
    date: string, typeMusic: string, freeEntry: string,
    price: string, typeEvent: string, performer: string, capacity: number): Event[] {
    this.events.push(new Event(event, adress,
      date, typeMusic, freeEntry,
      price, typeEvent, performer, capacity));
    return this.events;
  }

  public deleteEvent(event: string, adress: string, date: string): Event[] {
    for (let i of this.events) {
      if (i.event == event && i.adress == adress && i.date == date) {
        console.log("TREBA DA SE BRISE");
        this.events.splice(this.events.indexOf(i), 1);
      }
    }
    return this.events;
  }

  public changeEvent(event: string, date: string,
    typeMusic: string,freeEntry: string, price: string, performer: string): Event[] {

    for (let i of this.events) {
      if (i.event == event) {
        console.log("TREBA DA SE MENJA");
        i.date = date;
        i.typeOfMusic = typeMusic;
        i.price = price;
        i.performer = performer;
        i.freeEntry = freeEntry;
      }
    }

    return this.events;
  }

  filterEvents(filterEvents : Filter): Event[] {


    return this.events.filter((event)=>(filterEvents.hasCurrentTypeMusic?event.typeOfMusic == filterEvents.currentTypeMusic : true)
    || (filterEvents.hasCurrentTypeEvent? filterEvents.currentTypeEvent == event.typeOfEvent: true)
    || (filterEvents.hasCurrentTypeEntry? filterEvents.currentTypeEntry == event.freeEntry: true)
    || (filterEvents.hasCurrentMax? parseInt(filterEvents.currentMax,10) <= parseInt(event.price,10): true)
    || (filterEvents.hasCurrentMin? parseInt(filterEvents.currentMin,10) >= parseInt(event.price,10): true));

  }


}
