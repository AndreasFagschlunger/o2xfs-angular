import { Directive, Input, ElementRef } from '@angular/core';
import { CashUnitStatus } from '../cash-unit-status.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmCashUnitStatus]'
})
export class CdmCashUnitStatusDirective extends AbstractOutcomeDirective {

  @Input('cdmCashUnitStatus')
  value: CashUnitStatus;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CashUnitStatus.OK:
        result = Outcome.SUCCESS;
        break;
      case CashUnitStatus.HIGH:
      case CashUnitStatus.LOW:
        result = Outcome.WARNING;
        break;
      case CashUnitStatus.FULL:
      case CashUnitStatus.EMPTY:
      case CashUnitStatus.INOP:
      case CashUnitStatus.MISSING:
      case CashUnitStatus.NOVAL:
      case CashUnitStatus.NOREF:
      case CashUnitStatus.MANIP:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



