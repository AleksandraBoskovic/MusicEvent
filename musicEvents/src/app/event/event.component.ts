import { Component, OnInit,Input} from '@angular/core';
import {Event} from './../../models/event.model';
import { InteractionService } from '../service/interaction.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input()
  event: Event;

  naziv: string;
  datum: string;
  adresa: string;
  muzika: string;
  slobodan_ulaz: string;
  cena: string;
  vrsta_dogadjaja: string;
  izvodjac: string;
  kapacitet: string;

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
    this._interactionService.sharedMessage1.subscribe(message1 => this.naziv = message1);
    this._interactionService.sharedMessage2.subscribe(message2 => this.datum = message2);
    this._interactionService.sharedMessage3.subscribe(message3 => this.adresa = message3);
    this._interactionService.sharedMessage4.subscribe(message4 => this.muzika = message4);
    this._interactionService.sharedMessage5.subscribe(message5 => this.slobodan_ulaz = message5);
    this._interactionService.sharedMessage6.subscribe(message6 => this.cena = message6);
    this._interactionService.sharedMessage7.subscribe(message7 => this.izvodjac = message7);
    this._interactionService.sharedMessage8.subscribe(message8 => this.vrsta_dogadjaja = message8);
    this._interactionService.sharedMessage9.subscribe(message9 => this.kapacitet = message9);
  }

  getNaziv() : string {
    return this.event.event;
  }

  getDatum(): string {
return this.event.date;
  }

  getTipMuzike(): string {

  return this.event.typeOfMusic;
  }

  newMessage(){
    this._interactionService.nextMessage(this.event.event);
    this._interactionService.nextMessage2(this.event.date);
    this._interactionService.nextMessage3(this.event.adress);
    this._interactionService.nextMessage4(this.event.typeOfMusic);
    this._interactionService.nextMessage5(this.event.freeEntry);
    this._interactionService.nextMessage6(this.event.price);
    this._interactionService.nextMessage7(this.event.performer);
    this._interactionService.nextMessage8(this.event.typeOfEvent);
    this._interactionService.nextMessage9(this.event.capacity);

  }

}
