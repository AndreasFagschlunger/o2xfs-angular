import { Directive, Input, ElementRef } from '@angular/core';
import { TellerUpdateAction } from '../teller-update-action.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmTellerUpdateAction]'
})
export class CdmTellerUpdateActionDirective extends AbstractOutcomeDirective {

  @Input('cdmTellerUpdateAction')
  value: TellerUpdateAction;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case TellerUpdateAction.CREATE_TELLER:
      case TellerUpdateAction.MODIFY_TELLER:
      case TellerUpdateAction.DELETE_TELLER:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



