import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XfsComponent } from './xfs.component';

describe('XfsComponent', () => {
  let component: XfsComponent;
  let fixture: ComponentFixture<XfsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XfsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XfsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
