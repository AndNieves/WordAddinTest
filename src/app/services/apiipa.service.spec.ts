import { TestBed, inject } from '@angular/core/testing';

import { ApiipaService } from './apiipa.service';

describe('ApiipaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiipaService]
    });
  });

  it('should be created', inject([ApiipaService], (service: ApiipaService) => {
    expect(service).toBeTruthy();
  }));
});
