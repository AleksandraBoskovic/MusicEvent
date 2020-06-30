import { Injectable } from '@angular/core';
import {Event} from './../../models/event.model';
@Injectable({
  providedIn: 'root'
})
export class TisketsService {

private usersTickets : Event[] = [];
private username: string;
private password: string;

  constructor() {

  }


addTicket(event: Event,number : string): Event[]
{
  let n = parseInt(number,10);

while(n > 0){
  this.usersTickets.push(event);
n--;
}
return this.usersTickets;

}

getTickets(): Event[]{
  return this.usersTickets;
}

getUsername() {
 return this.username;
}

getPassword(){

return this.password;
}


setUsername(username: string){
this.username=username;
}

setPassword(password: string){
  this.password=password;
}

restoreSesion(){
  this.username=null;
  this.password=null;
  this.usersTickets = [];
}



}
