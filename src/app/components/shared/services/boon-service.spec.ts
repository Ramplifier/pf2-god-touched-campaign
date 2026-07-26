import { TestBed } from '@angular/core/testing';

import { BoonService } from './boon-service';

describe('BoonService', () => {
  let service: BoonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BoonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
