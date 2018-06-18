import { Directive, Input, ElementRef } from '@angular/core';
import { Failure } from '../failure.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmFailure]'
})
export class CdmFailureDirective extends AbstractOutcomeDirective {

  @Input('cdmFailure')
  value: Failure;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Failure.EMPTY:
      case Failure.ERROR:
      case Failure.FULL:
      case Failure.LOCKED:
      case Failure.INVALID:
      case Failure.CONFIG:
      case Failure.NOTCONF:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



