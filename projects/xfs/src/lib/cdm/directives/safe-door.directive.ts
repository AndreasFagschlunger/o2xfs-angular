import { Directive, Input, ElementRef } from '@angular/core';
import { SafeDoor } from '../safe-door.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmSafeDoor]'
})
export class CdmSafeDoorDirective extends AbstractOutcomeDirective {

  @Input('cdmSafeDoor')
  value: SafeDoor;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case SafeDoor.NOTSUPPORTED:
        result = Outcome.NONE;
        break;
      case SafeDoor.OPEN:
        result = Outcome.WARNING;
        break;
      case SafeDoor.CLOSED:
        result = Outcome.SUCCESS;
        break;
      case SafeDoor.UNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



