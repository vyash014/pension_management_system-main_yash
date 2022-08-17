import { TestBed } from '@angular/core/testing';

import { PensionersService } from './pensioners.service';

describe('PensionersService', () => {
  let service: PensionersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PensionersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
