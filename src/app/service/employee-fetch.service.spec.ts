import { TestBed } from '@angular/core/testing';

import { EmployeeFetchService } from './employee-fetch.service';

describe('EmployeeFetchService', () => {
  let service: EmployeeFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
