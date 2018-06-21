import { TestBed, inject } from '@angular/core/testing';

import { ScoolService } from './scool.service';

describe('ScoolService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScoolService]
    });
  });

  it('should be created', inject([ScoolService], (service: ScoolService) => {
    expect(service).toBeTruthy();
  }));
});
