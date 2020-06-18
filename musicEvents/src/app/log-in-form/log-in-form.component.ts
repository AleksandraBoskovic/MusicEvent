import { Component, OnInit } from '@angular/core';
import { TisketsService } from './../service/tiskets.service';
import { AllUsersService } from '../service/all-users.service';
import { User } from 'src/models/user.model';
import { ɵBROWSER_SANITIZATION_PROVIDERS } from '@angular/platform-browser';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  showButton = true;
  user: User;
  prosao=false;


  constructor(private ticketsService: TisketsService,private userService :AllUsersService) { }

  ngOnInit() {
  }

  onPrijaviSe() {
    this.showButton = !this.showButton;
  }

  onLogIn(user: string, pass: string) {
   if(this.userService.existUser(user,pass)){
    this.user = this.userService.findUser(user,pass)[0];
    if(this.user.admin()){
    this.userService.showAdminPage = true;
    this.userService.isAdmin(true);}
    this.userService.showUserPage = true;
    this.prosao=true;
    this.ticketsService.user=this.user;
    this.userService.isAdmin(false);
   }else{
     window.alert("Uneseni korisnik ne postoji u bazi molimo vaas da se registrujete ili ponovite unos");
   }
}
}
