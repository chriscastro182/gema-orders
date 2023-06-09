import { TestBed } from '@angular/core/testing';

import { TechnicansService } from './technicans.service';

describe('TechnicansService', () => {
  let service: TechnicansService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TechnicansService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
