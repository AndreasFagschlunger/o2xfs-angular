import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xfs3Component } from './xfs3.component';

describe('Xfs3Component', () => {
  let component: Xfs3Component;
  let fixture: ComponentFixture<Xfs3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xfs3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xfs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
