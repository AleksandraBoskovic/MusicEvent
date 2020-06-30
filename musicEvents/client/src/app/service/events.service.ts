import { EventInt } from './../../models/eventInt.model';
import { Injectable, OnDestroy } from '@angular/core';
import { Event } from '../../models/event.model';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import {Filter} from './../../models/filters.model';


@Injectable({
  providedIn: 'root'
})
export class EventsService implements OnDestroy{

  private events: Event[] = [];
  private readonly eventsUrl = 'http://localhost:3000/events/';
  private listOfSubs : Subscription[] = [];



  constructor(private http : HttpClient) {


    this.refreshEvents();
  }


  private refreshEvents(){
    const sub = this.http.get(this.eventsUrl).subscribe(
      (events : EventInt[]) => {
        events.forEach(
          (event) => {
            const tmp : Event = new Event(event._id,event.nazivDog,event.adresa,event.datum,event.vrstaMuzike,
              event.slobodanUlaz,event.cena,event.vrstaDogadjaja,event.izvodjac,event.kapacitet);
              this.events.push(tmp);
          }
        );
      }
    );
    this.listOfSubs.push(sub);
  }


  public getEvents(): Event[] {
    return this.events;
  }

  public addEvent(u_naziv: string, u_adresa: string,
    u_datum: string, u_muzika: string, u_ulaz: string,
    u_cena: string, u_dogadjaj: string, u_izvodjac: string, u_kapacitet: number) {
    // this.events.push(new Event(u_naziv, u_adresa,
    //   u_datum, u_muzika, u_ulaz,
    //   u_cena, u_dogadjaj, u_izvodjac, u_kapacitet));
    // return this.events;
  }

  public deleteEvent(b_naziv: string, b_adresa: string, b_datum: string) {
    // for (let i of this.events) {
    //   if (i.event == b_naziv && i.adress == b_adresa && i.date == b_datum) {
    //     console.log("TREBA DA SE BRISE");
    //     this.events.splice(this.events.indexOf(i), 1);
    //   }
    // }
    // return this.events;
  }

  public changeEvent(i_naziv: string, i_datum: string,
    i_muzika: string, i_cena: string, i_izvodjac: string) {

    // for (let i of this.events) {
    //   if (i.event == i_naziv) {
    //     console.log("TREBA DA SE MENJA");
    //     i.date = i_datum;
    //     i.typeOfMusic = i_muzika;
    //     i.price = i_cena;
    //     i.performer = i_izvodjac;
    //   }
    // }

    // return this.events;
  }

  filterEvents(filterEvents : Filter): Event[] {


    return this.events.filter((event)=>(filterEvents.hasCurrentTypeMusic?event.typeOfMusic == filterEvents.currentTypeMusic : true)
    || (filterEvents.hasCurrentTypeEvent? filterEvents.currentTypeEvent == event.typeOfEvent: true)
    || (filterEvents.hasCurrentTypeEntrance? filterEvents.currentTypeEntrance == event.freeEntry: true)
    || (filterEvents.hasCurrentMax? parseInt(filterEvents.currentMax,10) <= parseInt(event.price,10): true)
    || (filterEvents.hasCurrentMin? parseInt(filterEvents.currentMin,10) >= parseInt(event.price,10): true));



  }

  ngOnDestroy(){
    this.listOfSubs.forEach((sub) => {sub.unsubscribe();});
  }


}
