import { TestBed, inject } from '@angular/core/testing';

import { Xfs330Service } from './xfs330.service';

describe('Xfs330Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xfs330Service]
    });
  });

  it('should be created', inject([Xfs330Service], (service: Xfs330Service) => {
    expect(service).toBeTruthy();
  }));
});
