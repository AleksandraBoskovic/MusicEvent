import { Injectable } from '@angular/core';
import { Event } from '../../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private events: Event[];

  constructor() {
    this.events = [new Event('Beer fest', 'Usce', '20.08.2020', 'rok', 'jeste', '0',
      'koncert', 'Riblja corba', '10000'), new Event('Ceca', 'Usce', '20.08.2020', 'pop', 'nije', '0',
      'koncert', 'Riblja corba', '10000'),new Event('Sasa Kovacevic', 'Usce', '12.05.2020', 'pop', 'jeste', '0',
      'koncert', 'Riblja corba', '10000')];
  }


  public getEvents(): Event[] {
    return this.events;
  }

  public addEvent(u_naziv: string, u_adresa: string,
    u_datum: string, u_muzika: string, u_ulaz: string,
    u_cena: string, u_dogadjaj: string, u_izvodjac: string, u_kapacitet: string): Event[] {
    this.events.push(new Event(u_naziv, u_adresa,
      u_datum, u_muzika, u_ulaz,
      u_cena, u_dogadjaj, u_izvodjac, u_kapacitet));
    return this.events;
  }

  public deleteEvent(b_naziv: string, b_adresa: string, b_datum: string): Event[] {
    for (let i of this.events) {
      if (i.event == b_naziv && i.adress == b_adresa && i.date == b_datum) {
        console.log("TREBA DA SE BRISE");
        this.events.splice(this.events.indexOf(i), 1);
      }
    }
    return this.events;
  }

  public changeEvent(i_naziv: string, i_datum: string,
    i_muzika: string, i_cena: string, i_izvodjac: string): Event[] {

    for (let i of this.events) {
      if (i.event == i_naziv) {
        console.log("TREBA DA SE MENJA");
        i.date = i_datum;
        i.typeOfMusic = i_muzika;
        i.price = i_cena;
        i.performer = i_izvodjac;
      }
    }

    return this.events;
  }




}
