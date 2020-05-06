import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  slike = ['prva','druga','treca'];


  selected: String = 'prva';
  constructor() { }

  ngOnInit() {
  }


  setValue(people: string): void {
    this.selected = people;
  }
}
