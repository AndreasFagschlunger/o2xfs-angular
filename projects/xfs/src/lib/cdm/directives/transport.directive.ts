import { Directive, Input, ElementRef } from '@angular/core';
import { Transport } from '../transport.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmTransport]'
})
export class CdmTransportDirective extends AbstractOutcomeDirective {

  @Input('cdmTransport')
  value: Transport;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Transport.OK:
        result = Outcome.SUCCESS;
        break;
      case Transport.INOP:
      case Transport.UNKNOWN:
      case Transport.NOTSUPPORTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



