
import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { LogData } from 'src/models/logData.model';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  currentType = "tehno";
  @Output('logged')
  public emitLog : EventEmitter<LogData> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  logged(event: LogData){

   this.emitLog.emit(event);
  }


}
