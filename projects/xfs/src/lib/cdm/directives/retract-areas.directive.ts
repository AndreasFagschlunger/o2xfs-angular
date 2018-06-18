import { Directive, Input, ElementRef } from '@angular/core';
import { RetractAreas } from '../retract-areas.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmRetractAreas]'
})
export class CdmRetractAreasDirective extends AbstractOutcomeDirective {

  @Input('cdmRetractAreas')
  value: RetractAreas;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case RetractAreas.RETRACT:
      case RetractAreas.TRANSPORT:
      case RetractAreas.STACKER:
      case RetractAreas.REJECT:
      case RetractAreas.NOTSUPP:
      case RetractAreas.ITEMCASSETTE:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



