import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-giphy-gallery',
  templateUrl: './giphy-gallery.component.html',
  styleUrls: ['./giphy-gallery.component.css']
})
export class GiphyGalleryComponent implements OnInit {

  @Input()
  public selected: string;
  constructor() { }

  ngOnInit() {
  }
  setValue(type: string): void {
    this.selected = type;
  }
}
