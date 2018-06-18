import { Directive, Input, ElementRef } from '@angular/core';
import { IntermediateStacker } from '../intermediate-stacker.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmIntermediateStacker]'
})
export class CdmIntermediateStackerDirective extends AbstractOutcomeDirective {

  @Input('cdmIntermediateStacker')
  value: IntermediateStacker;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case IntermediateStacker.EMPTY:
        result = Outcome.SUCCESS;
        break;
      case IntermediateStacker.NOTEMPTY:
      case IntermediateStacker.NOTEMPTYCUST:
      case IntermediateStacker.NOTEMPTYUNK:
      case IntermediateStacker.UNKNOWN:
      case IntermediateStacker.NOTSUPPORTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



