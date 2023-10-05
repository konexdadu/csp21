import { TestBed } from '@angular/core/testing';

import { CrudautoService } from './crudauto.service';

describe('CrudbusService', () => {
  let service: CrudautoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudautoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});