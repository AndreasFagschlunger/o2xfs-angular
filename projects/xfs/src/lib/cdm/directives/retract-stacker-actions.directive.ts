import { Directive, Input, ElementRef } from '@angular/core';
import { RetractStackerActions } from '../retract-stacker-actions.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmRetractStackerActions]'
})
export class CdmRetractStackerActionsDirective extends AbstractOutcomeDirective {

  @Input('cdmRetractStackerActions')
  value: RetractStackerActions;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case RetractStackerActions.PRESENT:
      case RetractStackerActions.RETRACT:
      case RetractStackerActions.REJECT:
      case RetractStackerActions.NOTSUPP:
      case RetractStackerActions.ITEMCASSETTE:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



