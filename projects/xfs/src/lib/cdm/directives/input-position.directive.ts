import { Directive, Input, ElementRef } from '@angular/core';
import { InputPosition } from '../input-position.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmInputPosition]'
})
export class CdmInputPositionDirective extends AbstractOutcomeDirective {

  @Input('cdmInputPosition')
  value: InputPosition;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case InputPosition.LEFT:
      case InputPosition.RIGHT:
      case InputPosition.CENTER:
      case InputPosition.TOP:
      case InputPosition.BOTTOM:
      case InputPosition.FRONT:
      case InputPosition.REAR:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



