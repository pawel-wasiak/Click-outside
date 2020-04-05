import { TestBed } from '@angular/core/testing';

import { ClickOutsideLibService } from './click-outside-lib.service';

describe('ClickOutsideLibService', () => {
  let service: ClickOutsideLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickOutsideLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
