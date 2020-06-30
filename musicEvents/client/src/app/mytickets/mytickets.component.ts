import { Component, OnInit } from '@angular/core';
import {TisketsService} from './../service/tiskets.service';
import {Event} from './../../models/event.model';
@Component({
  selector: 'app-mytickets',
  templateUrl: './mytickets.component.html',
  styleUrls: ['./mytickets.component.css']
})
export class MyticketsComponent implements OnInit {

 myTickets: Array<Event>;
 username: string;
 password: string;
  constructor(private ticketService: TisketsService) {
    this.myTickets = this.ticketService.getTickets();
    this.username= this.ticketService.getUsername();
    this.password= this.ticketService.getPassword();
  }

  ngOnInit() {
  }

}
