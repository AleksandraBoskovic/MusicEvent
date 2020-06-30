import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiphyGalleryComponent } from './giphy-gallery.component';

describe('GiphyGalleryComponent', () => {
  let component: GiphyGalleryComponent;
  let fixture: ComponentFixture<GiphyGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiphyGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiphyGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
