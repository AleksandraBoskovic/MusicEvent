import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from './../../models/filters.model';

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
  public emitCurrent: EventEmitter<Filter> = new EventEmitter();
  currentFilter = new Filter('tehno',false, '',false, '',false,'0',false,'10000',false);

  @Output('giveAll')
  public emitAll: EventEmitter<string> = new EventEmitter();


  min= '0';
  max= '10000';
  cena = false;

  currentActive: string;
  currentActiveTypeEvent: string;
  currentActiveTypeEntrance: string;

  constructor() { }

  ngOnInit() {
  }

  changeTypeTo(currentType: string): void {
    this.currentActive = currentType,
      this.currentFilter.currentTypeMusic = currentType;
      this.currentFilter.hasCurrentTypeMusic = true;
  }
  changeTypeEventTo(currentTypeEvent: string): void {
    this.currentActiveTypeEvent = currentTypeEvent,
      this.currentFilter.currentTypeEvent = currentTypeEvent;
      this.currentFilter.hasCurrentTypeEvent = true;
  }
  changeTypeEntrance(currentTypeEntrance: string): void {
    this.currentActiveTypeEntrance = currentTypeEntrance;
    this.currentFilter.currentTypeEntrance = currentTypeEntrance;
    this.currentFilter.hasCurrentTypeEntrance = true;
    if(currentTypeEntrance === "nije"){
    this.cena = true ;}
  }

  filterEvents() {

    if(this.min > this.max) {
      window.alert('Minimalna cena karte ne sme biti veca od maksimalne ');
    }else {
      this.currentFilter.currentMin=this.min;
      this.currentFilter.hasCurrentMin = true;
      this.currentFilter.currentMax=this.max;
      this.currentFilter.hasCurrentMax = true;
    this.emitCurrent.emit(this.currentFilter);
    }
  }

  getValueMin(event : any){
    this.min = event.value;
  }

  getValueMax(event : any){
    this.max = event.value;
  }

  allEvents() {
    this.currentFilter.currentTypeMusic = 'tehno';
    this.currentActive = '';
    this.currentActiveTypeEvent = '';
    this.currentActiveTypeEntrance = '';
    this.currentFilter.hasCurrentMin = false;
    this.currentFilter.hasCurrentMax = false;
    this.currentFilter.hasCurrentTypeEntrance = false;
    this.currentFilter.hasCurrentTypeEvent = false;
    this.currentFilter.hasCurrentTypeMusic = false;
    this.cena = false;
    this.emitAll.emit('giveAll');

  }

  change(p: string) {
    let color = '#00565B';
    if (p === this.currentActive || p === this.currentActiveTypeEvent || p === this.currentActiveTypeEntrance) {
      color = 'rgb(255, 166, 0)';
    }
    return {
      'background-color': color,
      color: 'black'
    }
  }



}
