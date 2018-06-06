import { TestBed, inject } from '@angular/core/testing';

import { Xfs310Service } from './xfs310.service';

describe('Xfs310Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xfs310Service]
    });
  });

  it('should be created', inject([Xfs310Service], (service: Xfs310Service) => {
    expect(service).toBeTruthy();
  }));
});
