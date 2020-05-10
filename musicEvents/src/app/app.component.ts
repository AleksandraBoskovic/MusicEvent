import { Component } from '@angular/core';
import { TisketsService } from './service/tiskets.service';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicEvents';

  private ticketService: TisketsService;


logOut(){
 this.ticketService.restoreSesion();

}

}
