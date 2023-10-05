import { TestBed } from '@angular/core/testing';

import { CrudcontactusService } from './crudcontactus.service';

describe('CrudbusService', () => {
  let service: CrudcontactusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudcontactusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});