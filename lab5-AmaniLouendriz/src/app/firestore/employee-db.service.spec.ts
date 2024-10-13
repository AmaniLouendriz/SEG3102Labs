import { TestBed } from '@angular/core/testing';

import { EmployeeDbService } from './employee-db.service';

describe('AddressDbService', () => {
  let service: EmployeeDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
