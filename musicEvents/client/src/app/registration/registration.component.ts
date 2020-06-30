import { UserServerInt } from './../../models/userServerInt.model';
import { UserInt } from './../../models/userInt.model';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit,EventEmitter ,Output} from '@angular/core';
import { User } from './../../models/user.model';
import { equal } from 'assert';
import { Observable } from 'rxjs';
import {LogData} from './../../models/logData.model';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // user: User[] = [];
  // korisnik: string;
  errorMessageName = '';
  errorMessageSurname = '';
  errorMessageUsername = '';
  errorMessagePassword = '';
  errorMessagePassword2 = '';

  @Output('registration')
  public emitReg : EventEmitter<LogData> = new EventEmitter();


  re: any = new RegExp("[a-zA-Z]");

  private readonly postUserUrl = 'http://localhost:3000/users/';

  constructor(private http : HttpClient) { }

  ngOnInit() {
  }
  onSubmit(name: string, surname: string, username: string, password: string,password2: string): void {
    if (this.chack(name, surname, username, password) && this.equal_password(password,password2)) {
      const body = {
        "name" : name,
        "surname" : surname,
        "username" : username,
        "password" : password
      };
      const fromServer : Observable<UserServerInt> = this.http.post<UserServerInt>(this.postUserUrl,body);
      // let serverData : UserServerInt = null;
      fromServer.subscribe((data : UserServerInt) => {
        console.log(data);
        window.alert(data.message);
      });
     this.emitReg.emit(new LogData(true,false));


    }

  }
equal_password(password1: string, password2: string): boolean {
  if(password1 === password2){
    return true;
  }
  this.errorMessagePassword2 = "Lozinke se ne poklapaju"
  return false;
}
  chack(name: string, surname: string, username: string, password: string): boolean {
    return this.chack_name(name) && this.chack_surname(surname) && this.chack_username(username) && this.chack_password(password);
  }

  chack_name(name: string): boolean {
    this.errorMessageName = '';
    if (name.length == 0) {
      this.errorMessageName = 'Obavezno polje';
      return false;
    }
    for (let i = 0; i < name.length; i++) {
      if ("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmšđčćžŠĐČĆŽ ".indexOf(name[i]) == -1) {
        this.errorMessageName = 'Ime moze sadrzati samo slova';
        return false;
      }
    }
    return true;

  }

  chack_surname(surname: string): boolean {
    this.errorMessageSurname = '';
    if (surname.length == 0) {
      this.errorMessageSurname = 'Obavezno polje';
      return false;
    }
    for (let i = 0; i < surname.length; i++) {
      if ("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmšđčćžŠĐČĆŽ ".indexOf(surname[i]) == -1) {
        this.errorMessageSurname = 'Prezime moze sadrzati samo slova';
        return false;
      }
    }
    return true;

  }


  chack_username(username: string): boolean {
    this.errorMessageUsername = '';
    if (username.length == 0) {
      this.errorMessageUsername = 'Obavezno polje';
      return false;
    }
    if (username.length < 6 || username.length > 12) {
      this.errorMessageUsername = 'Korisnicko ime moze biti duzine 6 do 12 karaktera';
      return false;
    }
    for (let i = 0; i < username.length; i++) {
      if ("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmšđčćžŠĐČĆŽ123456789_.".indexOf(username[i]) == -1) {
        this.errorMessageUsername = 'Korisnicko ime moze sadrzati slova brojeve _ . ';
        return false;
      }
    }
    return true;

  }

  chack_password(password: string): boolean {
    this.errorMessagePassword = '';
    if (password.length == 0) {
      this.errorMessagePassword = 'Obavezno polje';
      return false;
    }
    if (password.length < 8) {
      this.errorMessagePassword = 'Lozinka mora imati minimalno 8 karaktera ';
      return false;
    }

    for (let i = 0; i < password.length; i++) {
      if ("123456789".indexOf(password[i]) != -1) {
        return true;
      }
    }
    this.errorMessagePassword = 'Lozinka mora sadrzati bar jednu cifru ';
    return false;


  }


}
