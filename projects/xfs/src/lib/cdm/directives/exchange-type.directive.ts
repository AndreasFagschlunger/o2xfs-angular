import { Directive, Input, ElementRef } from '@angular/core';
import { ExchangeType } from '../exchange-type.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmExchangeType]'
})
export class CdmExchangeTypeDirective extends AbstractOutcomeDirective {

  @Input('cdmExchangeType')
  value: ExchangeType;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case ExchangeType.BYHAND:
      case ExchangeType.TOCASSETTES:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



