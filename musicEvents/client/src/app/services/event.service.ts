import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from './../../models/event';
import { ResponseFilter } from './../../models/responseFilter';
import { NetworkService } from './network.service';
import {Filter} from './../../models/filters';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  events:Event[];

  private eventsUrl: string = "http://localhost:3000/events/";

  constructor(private http: HttpClient) {
    this.getEvents().subscribe(data => this.events=data);
  }


  getEvents(): Observable<Event[]> {
    return this.http.get<Event[]>(this.eventsUrl);
  }

  getById(id: string): Observable<Event> {
    return this.http.get<Event>(this.eventsUrl + id);
  }
  deleteById(id: string): Observable<string> {
   return this.http.delete<string>(this.eventsUrl + id);
  }

  public createEvent(data): Observable<Event>
  {
    const body = {
      "detalji": data.detalji,
      "nazivDog": data.nazivDog,
      "slika": data.slika,
      "cena": data.cena,
      "kapacitet": data.kapacitet,
      "datum": data.datum,
      "vrstaMuzike": data.vrstaMuzike,
      "vrstaDogadjaja": data.vrstaDogadjaja,
      "adresa": data.adresa,
      "slobodanUlaz": data.slobodanUlaz
    }
    return this.http.put<Event>(this.eventsUrl ,body);
  }

  updateEvent(name: string, value: string | Number, id: string): Observable<{ message: string, events: Event }> {
    let body = [{
      "fieldName": name,
      "newValue": value
    }]
    return this.http.patch<{ message: string, events: Event }>(this.eventsUrl + id, body);
  }


  filterEvents(filterEvents : Filter): Event[] {

    console.log(this.events);
    console.log(filterEvents.currentDate);
    return this.events.filter((event) =>
    (filterEvents.hasCurrentTypeMusic ? event.vrstaMuzike === filterEvents.currentTypeMusic : false)
    || (filterEvents.hasCurrentTypeEvent ? filterEvents.currentTypeEvent === event.vrstaDogadjaja: false)
    || (filterEvents.hasCurrentDate ? filterEvents.currentDate === event.datum: false));

  }

}



