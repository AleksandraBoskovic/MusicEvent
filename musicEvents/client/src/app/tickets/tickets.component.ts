import { Component, OnInit } from '@angular/core';
import { Ticket } from './../../models/ticket';
import { MyTicketService } from '../services/my-ticket.service';

@Component({
  selector: 'app-tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {

  tickets: Ticket[];
  sum: Number;

  constructor(private ticketService: MyTicketService) {
    this.tickets = ticketService.getTickets();
  }

  ngOnInit(): void {
    this.ticketService.sharedSum.subscribe(message => this.sum = message);
  }

  potvrdi() {
    this.ticketService.potvrdi().subscribe(data => {
      console.log(data.savedEvent.eventsAndTickets);
    });
    this.tickets = [];
    this.ticketService.nextMessage(0);
  }

  odustani(index: string) {
    this.ticketService.nextMessage((Number(this.sum) - (this.tickets[index].cena * this.tickets[index].odabrano)));
    this.tickets.splice(Number(index), 1);
  }

}
