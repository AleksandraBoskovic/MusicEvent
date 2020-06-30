import { Component } from '@angular/core';
import { TisketsService } from './service/tiskets.service';
import { RouterLink } from '@angular/router';
import { LogData } from 'src/models/logData.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicEvents';

  private ticketService: TisketsService;
  logged = true;
  registration = false;
  ok = false;

logOut(){
  this.logged = true;
  this.ok = false;
  this.registration = false;
 this.ticketService.restoreSesion();

}

onLogIn(event: LogData){
  this.logged=event.log;
  this.registration = event.registration;
  this.ok = !event.log && !event.registration;
}

onRegistration(event : LogData){
this.registration = event.registration;
this.logged = event.log;
}

}
