import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  types = ['pop', 'rok', 'tehno', 'domaca', 'dance'];
  typesEvent = ['koncert', 'humanitarni koncert', 'svirka', 'festival', 'kafana', 'klub'];
  typeEntrance = ['jeste', 'nije'];

  @Output('currentFilter')
  public emitCurrent: EventEmitter<{
    currentType: string,
    currentTypeEvent: string,
    currentTypeEntrance: string
  }> = new EventEmitter();
  currentType = 'tehno';
  currentTypeEvent: string;
  currentTypeEntrance: string;

  @Output('giveAll')
  public emitAll:EventEmitter<string> = new EventEmitter();



  currentActive: string;
  currentActiveTypeEvent:string;
  currentActiveTypeEntry:string;

  constructor() { }

  ngOnInit() {
  }

  changeTypeTo(currentType: string): void {
    this.currentActive = currentType,
    this.currentType = currentType;
  }
  changeTypeEventTo(currentTypeEvent: string): void {
    this.currentActiveTypeEvent = currentTypeEvent,
    this.currentTypeEvent = currentTypeEvent;
  }
  changeTypeEntrance(currentTypeEntrance: string): void {
    this.currentActiveTypeEntry = currentTypeEntrance;
    this.currentTypeEntrance = currentTypeEntrance;
  }

  filtriraj() {

      this.emitCurrent.emit({
        currentType: this.currentType, currentTypeEvent: this.currentTypeEvent,
        currentTypeEntrance: this.currentTypeEntrance
      });

  }

  allEvents(){
    this.currentType = 'tehno';
    this.currentActive = '';
    this.currentActiveTypeEvent = '';
    this.currentActiveTypeEntry = '';
    this.emitAll.emit('giveAll');

  }

  promeni(p: string) {
    let color = '#00565B';
    if (p === this.currentActive || p === this.currentActiveTypeEvent || p === this.currentActiveTypeEntry) {
      color = 'rgb(255, 166, 0)';
    }
    return {
      'background-color': color,
      color: 'black'
    }
  }



}
