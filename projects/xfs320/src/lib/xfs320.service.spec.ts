import { TestBed, inject } from '@angular/core/testing';

import { Xfs320Service } from './xfs320.service';

describe('Xfs320Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xfs320Service]
    });
  });

  it('should be created', inject([Xfs320Service], (service: Xfs320Service) => {
    expect(service).toBeTruthy();
  }));
});
