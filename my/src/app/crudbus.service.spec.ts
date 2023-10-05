import { TestBed } from '@angular/core/testing';

import { CrudbusService } from './crudbus.service';

describe('CrudbusService', () => {
  let service: CrudbusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudbusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});