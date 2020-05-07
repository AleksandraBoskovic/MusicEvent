import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  username: string;
  password: string;
  showButton = true;
  successLog = true;
  showUser = false;
  showUser2 = false;
  showUser3 = false;
  userExist = false;

  usernamePasswordList = [['Maja', 'majga'], ['Aleksandra', 'alebo'], ['Marica', 'marbo'], ['Milos', 'milmi']];

  constructor() { }

  ngOnInit() {
  }

  onPrijaviSe() {
    this.showButton = !this.showButton;
  }
  onLogIn(user: string, pass: string) {

    this.username = user;
    this.password = pass;
    this.showUser = false;
    this.showUser2 = false;
    this.showUser3 = false;
    this.usernamePasswordList.push(['Ana', 'anara']);
    for (let i of this.usernamePasswordList) {
      if (i[0] === this.username && i[1] === this.password) {
        this.userExist = true;
      }
    }

    if (this.userExist) {
      this.showUser = false;
      this.successLog = false;
    }

    if (this.userExist === false) {

      this.showUser = false;
      this.showUser2 = false;
      this.showUser3 = true;
    }
    if (this.username == "" || this.password == "") {
      this.showUser2 = true;
      this.showUser3 = false;
    }

    this.userExist = false;



  }

}
