import { Injectable } from '@angular/core';
import {BehaviorSubject } from 'rxjs';
import {Event} from './../../models/event.model';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  // // private naziv: string;
  // private message = new BehaviorSubject('First Message');
  // sharedMessage = this.message.asObservable();
  // constructor() { }

  // nextMessage(message: string) {
  //   this.message.next(message)
  // }
  // // setMessage(message: string){
  // //    this.naziv=message;
  // // }

  // // get name() {
  // //   return this.naziv;
  // // }

  private message = new BehaviorSubject(new Event('a','b','c','d','e','f','g','h',0));
  sharedMessage = this.message.asObservable();

  //  private message2 = new BehaviorSubject('Second message');
  //  sharedMessage2 = this.message2.asObservable();

  //  private message3 = new BehaviorSubject('Third message');
  //  sharedMessage3 = this.message3.asObservable();

  //  private message4 = new BehaviorSubject('Fourth message');
  //  sharedMessage4 = this.message4.asObservable();

  //  private message5 = new BehaviorSubject('Fifth message');
  //  sharedMessage5 = this.message5.asObservable();

  //  private message6 = new BehaviorSubject('Sixth message');
  //  sharedMessage6 = this.message6.asObservable();

  //  private message7 = new BehaviorSubject('Seventh message');
  //  sharedMessage7 = this.message7.asObservable();

  //  private message8 = new BehaviorSubject('Eighth message');
  //  sharedMessage8 = this.message8.asObservable();

  //  private message9 = new BehaviorSubject(9);
  //  sharedMessage9 = this.message9.asObservable();

  constructor() { }

   nextMessage(message: Event){
     this.message.next(message);

  }
  // nextMessage2(message: string){
  //    this.message2.next(message);
  //  }

  //  nextMessage3(message: string){
  //   this.message3.next(message);
  // }

  //  nextMessage4(message: string){
  //   this.message4.next(message);
  // }

  //  nextMessage5(message: string){
  //   this.message5.next(message);
  // }

  //  nextMessage6(message: string){
  //   this.message6.next(message);
  // }

  //  nextMessage7(message: string){
  //   this.message7.next(message);
  // }

  // nextMessage8(message: string){
  //   this.message8.next(message);
  // }

  // nextMessage9(message: number){
  //   this.message9.next(message);
  // }





}
