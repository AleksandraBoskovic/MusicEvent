import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  ime: string;
  prezime: string;
  majinaPromenljiva = false;
  errorMessageName = '*';
  user: string;
  constructor() { }


  ngOnInit() {
  }
  chack(): void {
    this.errorMessageName = '';

    if ((this.ime).length == 0) {
      this.errorMessageName = 'Obavezno polje';
    }
    let noletter = 0;
    for (let i = 0; i < this.ime.length; i++) {
      if ("QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnmšđčćžŠĐČĆŽ ".indexOf(this.ime[i]) == -1) {
        noletter = noletter + 1;
      }
    }
    if (noletter > 0) {
      this.errorMessageName = 'Ime moze sadrzati samo slova';
    }
  }
  onSubmit(name: string, surname: string, username: string): void {
    this.ime = name;
    this.prezime = surname;
    this.user= username;
    this.majinaPromenljiva = true;
    this.chack();
  }
}
