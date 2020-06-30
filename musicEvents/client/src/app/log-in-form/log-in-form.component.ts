import { Observable } from 'rxjs';
import { UserServerInt } from './../../models/userServerInt.model';
import { HttpClient } from '@angular/common/http';
import { UserInt } from './../../models/userInt.model';
import { Component, OnInit, Output ,EventEmitter} from '@angular/core';
import { TisketsService } from './../service/tiskets.service';
import { LogData } from 'src/models/logData.model';


@Component({
  selector: 'app-log-in-form',
  templateUrl: './log-in-form.component.html',
  styleUrls: ['./log-in-form.component.css']
})
export class LogInFormComponent implements OnInit {

  // USER KOJI SE ULOGOVAO
  private loggedUser : UserInt = null;
  private logInUrl = 'http://localhost:3000/users/logIn';

  @Output('logged')
  public emitLog : EventEmitter<LogData> = new EventEmitter();

  username: string;
  password: string;
  showButton = true;
  successLog = true;
  showUser = false;
  showUser2 = false;
  showUser3 = false;
  userExist = false;


  constructor(private ticketsService: TisketsService,private http : HttpClient) { }

  ngOnInit() {
  }

  onRegistration(){
    this.emitLog.emit(new LogData(false,true));
  }


  onPrijaviSe() {
    this.showButton = !this.showButton;
  }
  onLogIn(user: string, pass: string) {
    const body = {
      "username" : user,
      "password" : pass
    };


    let stream : Observable<UserServerInt> = this.http.post<UserServerInt>(this.logInUrl,body);
    stream.subscribe(
      (data : UserServerInt) => {
        this.loggedUser = data.user;
        console.log(this.loggedUser);
        window.alert("User:" + this.loggedUser.name + " is logged succesfuly");
        this.ticketsService.setUsername(user);
        this.ticketsService.setPassword(user);
        this.emitLog.emit(new LogData(false,false));
      },(err) => {window.alert("User do not exists!");}
    );



    // this.username = user;
    // this.password = pass;
    // this.showUser = false;
    // this.showUser2 = false;
    // this.showUser3 = false;
    // this.usernamePasswordList.push(['Ana', 'anara']);
    // for (let i of this.usernamePasswordList) {
    //   if (i[0] === this.username && i[1] === this.password) {
    //     this.userExist = true;
    //   }
    // }

    // if (this.userExist) {
    //   this.showUser = false;
    //   this.successLog = false;
    // }

    // if (this.userExist === false) {

    //   this.showUser = false;
    //   this.showUser2 = false;
    //   this.showUser3 = true;
    // }
    // if (this.username == "" || this.password == "") {
    //   this.showUser2 = true;
    //   this.showUser3 = false;
    // }

    // this.userExist = false;

    // this.ticketsService.setPassword(this.password);
    // this.ticketsService.setUsername(this.username);
  }

}
