import { Directive, Input, ElementRef } from '@angular/core';
import { PositionStatus } from '../position-status.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmPositionStatus]'
})
export class CdmPositionStatusDirective extends AbstractOutcomeDirective {

  @Input('cdmPositionStatus')
  value: PositionStatus;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case PositionStatus.EMPTY:
        result = Outcome.SUCCESS;
        break;
      case PositionStatus.NOTEMPTY:
      case PositionStatus.UNKNOWN:
      case PositionStatus.NOTSUPPORTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



