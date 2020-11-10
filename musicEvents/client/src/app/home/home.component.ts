import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventService } from '../services/event.service';
import { Event } from './../../models/event';
import { Filter } from 'src/models/filters';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  events: Event[];
  model: NgbDateStruct;
  constructor(private http: HttpClient, private eventService: EventService) {

    this.eventService.getEvents().subscribe(data => this.events = data);

  }

  ngOnInit(): void {
  }

  filter(typeOfMusic: string, typeOfEvent: string){

    let date = this.model.day+"."+this.model.month+"."+this.model.year;
    console.log(typeOfEvent,typeOfMusic,date);
    this.events = this.eventService.filterEvents(new Filter(typeOfMusic,true,typeOfEvent,true,date,true));

  }

  showAll(){
    this.eventService.getEvents().subscribe(data => this.events=data);
  }
}
