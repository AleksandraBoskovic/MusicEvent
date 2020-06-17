import { Component, OnInit } from '@angular/core';
import { Event } from './../../models/event.model';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { EventsService } from '../service/events.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  event: Array<Event> = [];
  adresa: string;
  dogadjaj: string;
  datum: string;
  muzika: string;
  slobodanulaz: string;
  cena: string;
  vrstadogadjaja: string;
  izvodjac: string;
  kapacitet: number;

  constructor(private eventService: EventsService) {
    this.event = this.eventService.getEvents();
  }

  ngOnInit() {
  }
  onSaveEvent(u_naziv: string, u_adresa: string, u_datum: string,
     u_muzika: string, u_ulaz: string, u_cena: string, u_dogadjaj: string,
      u_izvodjac: string, u_kapacitet: number) {

        this.event = this.eventService.addEvent(u_naziv, u_adresa,
           u_datum, u_muzika, u_ulaz,
       u_cena, u_dogadjaj, u_izvodjac, u_kapacitet);
    /*this.adresa = this.event[0].adress;
    this.dogadjaj = this.event[0].event;
    this.datum = this.event[0].date;
    this.muzika = this.event[0].typeOfMusic;
    this.slobodanulaz = this.event[0].freeEntry;
    this.cena = this.event[0].price;
    this.vrstadogadjaja = this.event[0].typeOfEvent;
    this.izvodjac = this.event[0].performer;
    console.log(this.dogadjaj);
    console.log(this.adresa);
    console.log(this.datum);

    console.log(this.muzika);
    console.log(this.slobodanulaz);
    console.log(this.cena);
    console.log(this.vrstadogadjaja);
    console.log(this.izvodjac);*/
    for (let i of this.event) {
      console.log(i);
    }

  }
  onDeleteEvent(b_naziv: string, b_adresa: string, b_datum: string) {
    this.event = this.eventService.deleteEvent(b_naziv, b_adresa, b_datum);
    for (let i of this.event) {
      console.log(i);
    }
  }
  onChangeEvent(i_naziv: string, i_datum: string, i_muzika: string, i_cena: string, i_izvodjac: string) {

    this.event = this.eventService.changeEvent(i_naziv, i_datum, i_muzika, i_cena, i_izvodjac);

    for (let i of this.event) {
      console.log(i);
    }

  }

}
