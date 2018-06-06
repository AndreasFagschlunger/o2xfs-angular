import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xfs330Component } from './xfs330.component';

describe('Xfs330Component', () => {
  let component: Xfs330Component;
  let fixture: ComponentFixture<Xfs330Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xfs330Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xfs330Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
