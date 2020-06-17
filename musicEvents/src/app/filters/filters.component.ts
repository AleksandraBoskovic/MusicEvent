import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Filter } from './../../models/filter.model';

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
  currentFilter = new Filter('tehno', '', '','0','10000');

  @Output('giveAll')
  public emitAll: EventEmitter<string> = new EventEmitter();


  min= '0';
  max= '10000';
  cena = false;

  currentActive: string;
  currentActiveTypeEvent: string;
  currentActiveTypeEntry: string;

  constructor() { }

  ngOnInit() {
  }

  changeTypeTo(currentType: string): void {
    this.currentActive = currentType,
      this.currentFilter.currentTypeMusic = currentType;
  }
  changeTypeEventTo(currentTypeEvent: string): void {
    this.currentActiveTypeEvent = currentTypeEvent,
      this.currentFilter.currentTypeEvent = currentTypeEvent;
  }
  changeTypeEntrance(currentTypeEntry: string): void {
    this.currentActiveTypeEntry = currentTypeEntry;
    this.currentFilter.currentTypeEntry = currentTypeEntry;
    if(currentTypeEntry === "nije"){
    this.cena = true ;}
  }

  filtriraj() {

    if(this.min > this.max) {
      window.alert('Minimalna cena karte ne sme biti veca od maksimalne ');
    }else {
      this.currentFilter.currentMin=this.min;
      this.currentFilter.currentMax=this.max;
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
    this.currentActiveTypeEntry = '';
    this.cena = false;
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
