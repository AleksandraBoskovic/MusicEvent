import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giphy-gallery',
  templateUrl: './giphy-gallery.component.html',
  styleUrls: ['./giphy-gallery.component.css']
})
export class GiphyGalleryComponent implements OnInit {

  musicType = ['tehno', 'dance', 'pop'];
  selected = 'tehno';
  constructor() { }

  ngOnInit() {
  }
  setValue(type: string): void {
    this.selected = type;
  }
}
