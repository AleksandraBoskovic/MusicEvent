import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Event } from './../../models/event.model';
@Injectable({
  providedIn: 'root'
})
export class InteractionService {


  private message = new BehaviorSubject(new Event('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 0));
  sharedMessage = this.message.asObservable();

  constructor() { }

  nextMessage(message: Event) {
    this.message.next(message);

  }


}
