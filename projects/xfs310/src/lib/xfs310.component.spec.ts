import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Xfs310Component } from './xfs310.component';

describe('Xfs310Component', () => {
  let component: Xfs310Component;
  let fixture: ComponentFixture<Xfs310Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Xfs310Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Xfs310Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
