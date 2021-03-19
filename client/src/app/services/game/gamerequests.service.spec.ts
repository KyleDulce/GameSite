import { TestBed } from '@angular/core/testing';

import { GamerequestsService } from './gamerequests.service';

describe('GamerequestsService', () => {
  let service: GamerequestsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GamerequestsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
