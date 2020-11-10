import { User } from './../../models/user';
import { NetworkService } from './../services/network.service';
import { Component, OnInit } from '@angular/core';
import { Ticket } from 'src/models/ticket';
import { MyTicketService } from '../services/my-ticket.service';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  public user: User;
  public loggedIn;
  tickets: Array<Ticket> = [];
  ticketKeys = [];


  constructor(private networkService: NetworkService, private ticketService: MyTicketService,
    private eventService: EventService
) {
    // zbog menjanja stranica bez refresovanja
    this.user = networkService.getLoggedUser();
    this.loggedIn = networkService.getLoggedIn();


    this.networkService.loggedIn.subscribe(loggedIn => {
      this.loggedIn = loggedIn;
    });
    this.networkService.loggedUser.subscribe((loggedUser: User) => {
      this.user = loggedUser;
    });

    this.ticketService.getUserTickets().subscribe(data => {
      for (let elem of data) {
        for (let reservation of elem.eventsAndTickets) {
          this.ticketKeys.push({ "id": reservation._id, "numOfTickets": reservation.numOfTickets });
        }
      }
      console.log(this.ticketKeys);
      for (let elem of this.ticketKeys) {
        this.eventService.getById(elem.id).subscribe(event => {
          this.tickets.push(new Ticket(event._id, event.nazivDog,
            event.adresa, event.datum, event.cena, elem.numOfTickets));
        });
      }
    });


  }
  change(str: string) {
    let upisano = window.prompt(str);
    this.networkService.updateUser(str, upisano, this.user._id).subscribe(data => this.user = data.user);
  }

  ngOnInit(): void {

  }

}
