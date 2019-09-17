import { TestBed } from '@angular/core/testing';

import { DvdsService } from './dvds.service';

describe('DvdsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DvdsService = TestBed.get(DvdsService);
    expect(service).toBeTruthy();
  });
});
