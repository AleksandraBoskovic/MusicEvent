import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user.model';
import { equal } from 'assert';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  user: Array<User> = [];
  errorMessageName = '';
  errorMessageSurname = '';
  errorMessageUsername = '';
  errorMessagePassword = '';
  errorMessagePassword2 = '';
  korisnik: string;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(name: string, surname: string, username: string, password: string,password2: string): void {
    if (this.chack(name, surname, username, password) && this.equal_password(password,password2)) {
      this.user.push(new User(name, surname, username, password));
      this.korisnik = this.user[0].getUsername();
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
