import { TestBed } from '@angular/core/testing';

import { MillService } from './mill.service';

describe('MillService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MillService = TestBed.get(MillService);
    expect(service).toBeTruthy();
  });
});
