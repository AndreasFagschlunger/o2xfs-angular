import { Directive, Input, ElementRef } from '@angular/core';
import { JammedShutterPosition } from '../jammed-shutter-position.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmJammedShutterPosition]'
})
export class CdmJammedShutterPositionDirective extends AbstractOutcomeDirective {

  @Input('cdmJammedShutterPosition')
  value: JammedShutterPosition;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case JammedShutterPosition.NOTSUPPORTED:
      case JammedShutterPosition.NOTJAMMED:
      case JammedShutterPosition.OPEN:
      case JammedShutterPosition.PARTIALLY_OPEN:
      case JammedShutterPosition.CLOSED:
      case JammedShutterPosition.UNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



