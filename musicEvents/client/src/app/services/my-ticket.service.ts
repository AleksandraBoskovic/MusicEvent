import { Injectable } from '@angular/core';
import { Ticket } from './../../models/ticket';
import { HttpClient } from '@angular/common/http';
import { THIS_EXPR, nullSafeIsEquivalent } from '@angular/compiler/src/output/output_ast';
import { NetworkService } from './network.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { ReservedArray } from './../../models/reservedArray';
import { Reserved } from 'src/models/reserved';
@Injectable({
  providedIn: 'root'
})
export class MyTicketService {

  tickets: Ticket[] = [];
  niz = [];

  private messageSum = new BehaviorSubject<Number>(Number(0));
  sharedSum = this.messageSum.asObservable();

  constructor(private http: HttpClient, private userService: NetworkService) {
  }

  nextMessage(sum: Number) {
    this.messageSum.next(sum);
  }


  addTicket(ticket: Ticket) {
    this.tickets.push(ticket);
    let suma = 0;
    for (let i of this.tickets) {
      suma = suma + (Number(i.cena) * Number(i.odabrano));
    }
    this.messageSum.next(suma);
  }
  getTickets() {
    return this.tickets;
  }

  potvrdi(): Observable<ReservedArray> {
    for (let ticket of this.tickets) {
      let events = new Map();
      events.set("_id", ticket.id);
      events.set("numOfTickets", ticket.odabrano);
      this.niz.push({ "_id": ticket.id, "numOfTickets": ticket.odabrano });
    }
    const body = {
      "username": this.userService.getLoggedUser().username,
      "events": this.niz
    };

    return this.http.post<ReservedArray>("http://localhost:3000/events/tickedReservation", body);

  }

  getUserTickets(): Observable<Reserved[]> {
    return this.http.get<Reserved[]>("http://localhost:3000/events/reservedtickets/" + this.userService.getLoggedUser().username);
  }


}
