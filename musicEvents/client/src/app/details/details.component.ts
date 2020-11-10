import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { ActivatedRoute } from '@angular/router';
import { Event } from './../../models/event';
import { MyTicketService } from '../services/my-ticket.service';
import { Ticket } from 'src/models/ticket';
import { NetworkService } from '../services/network.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  event: Event;
  isAdmin = false;
  isUser = false;
  odabrano = 0;
  id: string;

  constructor(private eventService: EventService, private route: ActivatedRoute,
    private ticketService: MyTicketService, private userService: NetworkService) {

    this.route.paramMap.subscribe(param => this.id = param.get("id"));

    // this.userService.loggedIn.subscribe(loggedIn => {
    //   this.loggedIn = loggedIn;
    //   console.log(this.loggedIn);
    // });

    this.eventService.getById(this.id).subscribe((data: Event) => {
      this.event = data;
      console.log(this.event);
    });

    if (this.userService.getLoggedIn() === true) {
      if (this.userService.getLoggedUser().administrator === true) {
        this.isAdmin = (true && this.userService.getLoggedIn());
        console.log(this.userService.getLoggedIn());
      } else {
        this.isUser = (true && this.userService.getLoggedIn());
      }
    }
  }

  ngOnInit(): void {
  }

  reserve() {
    console.log(this.odabrano);
    this.ticketService.addTicket(new Ticket(this.event._id,this.event.nazivDog, this.event.adresa,
      this.event.datum, Number(this.event.cena), Number(this.odabrano)));
  }
  deleteEvent() {
    this.eventService.deleteById(this.event._id).subscribe(data => console.log(data));
  }

  change(str: string) {
    let upisano = window.prompt("Unesite " + str);
    if (upisano !== "" && upisano !== null) {
      this.eventService.updateEvent(str, upisano, this.event._id).subscribe(data => {
        this.event = data.events;
      });
    }
  }

  add() {
    if (this.odabrano <= this.event.kapacitet) {
      this.odabrano = this.odabrano + 1;
    }
  }
  minus() {
    if (this.odabrano != 1) {
      this.odabrano = this.odabrano - 1;
    }
  }

}
