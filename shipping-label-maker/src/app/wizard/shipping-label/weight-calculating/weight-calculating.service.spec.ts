import { TestBed } from '@angular/core/testing';

import { WeightCalculatingService } from './weight-calculating.service';

describe('WeightCalculatingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WeightCalculatingService = TestBed.get(WeightCalculatingService);
    expect(service).toBeTruthy();
  });
});
