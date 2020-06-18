import { Component } from '@angular/core';
import { TisketsService } from './service/tiskets.service';
import { RouterLink } from '@angular/router';
import { AllUsersService } from './service/all-users.service';
import { User } from './../models/user.model';
import { ShowOnDirtyErrorStateMatcher } from '@angular/material/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusicEvents';

 showAdminPage = false;
 showUserPage = false;
 showIfLoggedIn = false ;


  constructor(private ticketService: TisketsService,
    private usersService: AllUsersService) {

  }

 ngOnInit(){
   this.usersService.sharedMessage.subscribe(message => this.showAdminPage = message);
 }

  logOut() {
    this.ticketService.restoreSesion();

  }

}
