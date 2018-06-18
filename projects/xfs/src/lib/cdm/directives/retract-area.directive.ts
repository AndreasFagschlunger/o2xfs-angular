import { Directive, Input, ElementRef } from '@angular/core';
import { RetractArea } from '../retract-area.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmRetractArea]'
})
export class CdmRetractAreaDirective extends AbstractOutcomeDirective {

  @Input('cdmRetractArea')
  value: RetractArea;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case RetractArea.RETRACT:
      case RetractArea.TRANSPORT:
      case RetractArea.STACKER:
      case RetractArea.REJECT:
      case RetractArea.NOTSUPP:
      case RetractArea.ITEMCASSETTE:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



