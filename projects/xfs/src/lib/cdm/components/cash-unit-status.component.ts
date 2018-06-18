import { Component, Input } from '@angular/core';
import { CashUnitStatus } from '../cash-unit-status.enum';

@Component({
  selector: 'cdmCashUnitStatus',
  templateUrl: './cash-unit-status.component.html'
})
export class CdmCashUnitStatusComponent {

  @Input()
  value: CashUnitStatus;

}
