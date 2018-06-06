import { TestBed, inject } from '@angular/core/testing';

import { Xfs3Service } from './xfs3.service';

describe('Xfs3Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Xfs3Service]
    });
  });

  it('should be created', inject([Xfs3Service], (service: Xfs3Service) => {
    expect(service).toBeTruthy();
  }));
});
