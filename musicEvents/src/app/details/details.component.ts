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

  capacity: boolean = true;
  event: Event;

  constructor(private _interactionService: InteractionService, private ticketsService: TisketsService) {

  }

  ngOnInit(): void {
    this._interactionService.sharedMessage.subscribe(message => this.event = message);
    if (!this.event.capacity)
      this.capacity = false;

  }

  addTicket(number: string) {
    if (this.event.capacity <= 0) {
      this.capacity = false;
    }
    else {
      console.log(number);
      console.log(this.event.capacity);
      if (this.event.capacity >= parseInt(number, 10)) {
        this.event.capacity = this.event.capacity - parseInt(number, 10);
        for (let i = 0; i < parseInt(number, 10); i++) {
          this.ticketsService.addTicket(this.event);
        }

        if (!this.event.capacity)
          this.capacity = false;
      }
      else {
        window.alert("Uneli ste veci broj karata od preostalog broja slobodnog mesta");
      }
    }

  }

}



