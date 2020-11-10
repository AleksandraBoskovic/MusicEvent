import { TestBed } from '@angular/core/testing';

import { MyTicketService } from './my-ticket.service';

describe('MyTicketService', () => {
  let service: MyTicketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyTicketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
