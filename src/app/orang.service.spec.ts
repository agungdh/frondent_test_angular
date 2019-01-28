import { TestBed } from '@angular/core/testing';

import { OrangService } from './orang.service';

describe('OrangService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrangService = TestBed.get(OrangService);
    expect(service).toBeTruthy();
  });
});
