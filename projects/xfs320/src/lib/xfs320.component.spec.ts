import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xfs320Component } from './xfs320.component';

describe('Xfs320Component', () => {
  let component: Xfs320Component;
  let fixture: ComponentFixture<Xfs320Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xfs320Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xfs320Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
