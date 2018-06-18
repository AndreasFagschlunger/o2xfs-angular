import { Directive, Input, ElementRef } from '@angular/core';
import { TransportStatus } from '../transport-status.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmTransportStatus]'
})
export class CdmTransportStatusDirective extends AbstractOutcomeDirective {

  @Input('cdmTransportStatus')
  value: TransportStatus;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case TransportStatus.EMPTY:
        result = Outcome.SUCCESS;
        break;
      case TransportStatus.NOTEMPTY:
      case TransportStatus.NOTEMPTYCUST:
      case TransportStatus.NOTEMPTY_UNK:
      case TransportStatus.NOTSUPPORTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



