import { TestBed } from '@angular/core/testing';

import { TisketsService } from './tiskets.service';

describe('TisketsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TisketsService = TestBed.get(TisketsService);
    expect(service).toBeTruthy();
  });
});
