import { Injectable } from '@angular/core';
import {Event} from './../../models/event.model';
import { User } from 'src/models/user.model';
import { AllUsersService } from './all-users.service';
@Injectable({
  providedIn: 'root'
})
export class TisketsService {

private usersTickets : Event[] = [];
user: User;

  constructor(private userService : AllUsersService) {

  }


addTicket(event: Event): Event[]
{
  this.usersTickets.push(event);
return this.usersTickets;

}

getTickets(): Event[]{
  return this.usersTickets;
}

getUsername() {
 return this.user.username;
}

getPassword(){

return this.user.password;
}


restoreSesion(){
  this.user = null;

  this.usersTickets = [];
}



}
