import { Directive, Input, ElementRef } from '@angular/core';
import { MixType } from '../mix-type.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmMixType]'
})
export class CdmMixTypeDirective extends AbstractOutcomeDirective {

  @Input('cdmMixType')
  value: MixType;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case MixType.ALGORITHM:
      case MixType.TABLE:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



