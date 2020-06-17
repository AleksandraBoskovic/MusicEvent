import { Component, OnInit,Input} from '@angular/core';
import {Event} from './../../models/event.model';
import { InteractionService } from '../service/interaction.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  @Input()
  event:Event;

  constructor(private _interactionService: InteractionService) { }

  ngOnInit() {
  }


  newMessage(){
    this._interactionService.nextMessage(this.event);
  }

}
