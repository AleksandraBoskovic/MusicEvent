import { EventServerInt } from './../../models/eventServerInt.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { InteractionService } from './../service/interaction.service';
import { Event } from './../../models/event.model';
import { TisketsService } from './../service/tiskets.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  id : string;
  event : Event;
  private readonly updateCapacityUrl : string = 'http://localhost:3000/events/';

  capacity: boolean = true;

  constructor(private _interactionService: InteractionService, private ticketsService: TisketsService,
    private http : HttpClient) {

  }


  ngOnInit(): void {
    this._interactionService.sharedMessage.subscribe(message => this.event = message);

    if (this.event.capacity <= 0) {
      this.capacity = false;
    }

  }


  dodajKartu(number: string) {

    // TODO GET IZ BAZE ZA KAPACITET ZBOG AZURNOSTI

     if (this.event.capacity <= 0) {
       this.capacity = false;
     }
     else{
      if (this.event.capacity >= parseInt(number,10)) {
        const body = [
          {
            "fieldName" : "kapacitet",
            "newValue" : (Number(this.event.capacity) - Number(number)).toString()
          }
        ]

        let stream : Observable<EventServerInt> = this.http.patch<EventServerInt>(
            this.updateCapacityUrl + this.event.id,body
        );
        stream.subscribe(
          (data : EventServerInt) => {
            this.event.capacity = data.events.kapacitet;
            console.log(data);
            console.log(data.events.kapacitet);
          }
        );

        this.ticketsService.addTicket(this.event,number);

        window.alert('Vase karte mozete pogledati na strani moje karte.');

      }
      else {
        window.alert("Uneli ste veci broj karata od preostalog broja slobodnog mesta");
      }
    }

  }

}



