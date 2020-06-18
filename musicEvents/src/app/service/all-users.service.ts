import { Injectable } from '@angular/core';
import { User } from '../../models/user.model';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AllUsersService {


  users = [];
  showUserPage =true;
  showAdminPage = true;

  private message = new BehaviorSubject(false);
  sharedMessage = this.message.asObservable();


  isAdmin(showAdminPage: boolean) {
    this.message.next(showAdminPage);
  }


  constructor() {
    this.users.push(new User('Aleksandra','Boskovic','alex','alex','admin'));
    this.users.push(new User('Maja','Gavrilovic','maja','maja','user'));

   }

  addUser(user: User): void {
this.users.push(user);
  }



  existUser(username:string,password:string): boolean {
    return this.users.filter(user => (username == user.username) && (password == user.password)).length > 0 ? true : false;
  }

  findUser(username:string,password:string):User [] {
    return this.users.filter(user => (username == user.username) && (password == user.password));
  }

}
