import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.css']
})
export class FiltersComponent implements OnInit {

  types = ['pop', 'rok', 'tehno', 'domaca', 'dance'];
  @Output('currentType')
  public emitCurrentType: EventEmitter<string> = new EventEmitter();
  currentType = 'tehno';

  constructor() { }

  ngOnInit() {
  }

  changeTypeTo(currentType: string): void {
    this.currentType = currentType;
  }

  filtriraj() {
    this.emitCurrentType.emit(this.currentType);
  }

}
