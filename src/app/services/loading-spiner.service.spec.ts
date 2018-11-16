import { TestBed, inject } from '@angular/core/testing';

import { LoadingSpinerService } from './loading-spiner.service';

describe('LoadingSpinerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoadingSpinerService]
    });
  });

  it('should be created', inject([LoadingSpinerService], (service: LoadingSpinerService) => {
    expect(service).toBeTruthy();
  }));
});
