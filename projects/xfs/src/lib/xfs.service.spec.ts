import { TestBed, inject } from '@angular/core/testing';

import { XfsService } from './xfs.service';

describe('XfsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [XfsService]
    });
  });

  it('should be created', inject([XfsService], (service: XfsService) => {
    expect(service).toBeTruthy();
  }));
});
