import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CashDispenserListComponent } from './cash-dispenser-list.component';

describe('CashDispenserListComponent', () => {
  let component: CashDispenserListComponent;
  let fixture: ComponentFixture<CashDispenserListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CashDispenserListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CashDispenserListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
