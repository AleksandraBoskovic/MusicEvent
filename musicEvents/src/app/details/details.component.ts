import { Component, OnInit } from '@angular/core';
import { InteractionService } from './../service/interaction.service';
import { Event } from './../../models/event.model';
import { TisketsService } from './../service/tiskets.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  // naziv: string;
  // datum: string;
  // adresa: string;
  // muzika: string;
  // slobodan_ulaz: string;
  // cena: string;
  // vrsta_dogadjaja: string;
  // izvodjac: string;
  // kapacitet: number;
   capacity: boolean = true;

   event: Event;

  constructor(private _interactionService: InteractionService, private ticketsService: TisketsService) {

  }


  ngOnInit(): void {
    this._interactionService.sharedMessage.subscribe(message => this.event = message);
    if(!this.event.capacity)
    this.capacity=false;
    // this._interactionService.sharedMessage2.subscribe(message2 => this.datum = message2);
    // this._interactionService.sharedMessage3.subscribe(message3 => this.adresa = message3);
    // this._interactionService.sharedMessage4.subscribe(message4 => this.muzika = message4);
    // this._interactionService.sharedMessage5.subscribe(message5 => this.slobodan_ulaz = message5);
    // this._interactionService.sharedMessage6.subscribe(message6 => this.cena = message6);
    // this._interactionService.sharedMessage7.subscribe(message7 => this.izvodjac = message7);
    // this._interactionService.sharedMessage8.subscribe(message8 => this.vrsta_dogadjaja = message8);
    // this._interactionService.sharedMessage9.subscribe(message9 => this.kapacitet = message9);

  }


  dodajKartu(number: string) {
    if (this.event.capacity <= 0) {
      this.capacity = false;
    }
    else {
      console.log(number);
      console.log(this.event.capacity);
      if (this.event.capacity >= parseInt(number,10)) {
        this.event.capacity = this.event.capacity -parseInt(number,10);
        for (let i = 0; i < parseInt(number,10); i++) {
          this.ticketsService.addTicket(this.event);
        }

        if(!this.event.capacity)
      this.capacity=false;
      }
      else {
        window.alert("Uneli ste veci broj karata od preostalog broja slobodnog mesta");
      }
    }

  }

}



