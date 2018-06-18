import { Directive, Input, ElementRef } from '@angular/core';
import { PresentState } from '../present-state.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmPresentState]'
})
export class CdmPresentStateDirective extends AbstractOutcomeDirective {

  @Input('cdmPresentState')
  value: PresentState;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case PresentState.PRESENTED:
      case PresentState.NOTPRESENTED:
      case PresentState.UNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



