import { TestBed } from '@angular/core/testing';

import { AcmeserviceService } from './acmeservice.service';

describe('AcmeserviceService', () => {
  let service: AcmeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AcmeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
