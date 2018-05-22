import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CdmStatusComponent } from './cdm-status.component';

describe('CdmStatusComponent', () => {
  let component: CdmStatusComponent;
  let fixture: ComponentFixture<CdmStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CdmStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CdmStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
