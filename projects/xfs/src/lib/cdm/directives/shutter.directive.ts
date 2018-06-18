import { Directive, Input, ElementRef } from '@angular/core';
import { Shutter } from '../shutter.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmShutter]'
})
export class CdmShutterDirective extends AbstractOutcomeDirective {

  @Input('cdmShutter')
  value: Shutter;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Shutter.CLOSED:
        result = Outcome.SUCCESS;
        break;
      case Shutter.OPEN:
      case Shutter.JAMMED:
      case Shutter.UNKNOWN:
      case Shutter.NOTSUPPORTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



