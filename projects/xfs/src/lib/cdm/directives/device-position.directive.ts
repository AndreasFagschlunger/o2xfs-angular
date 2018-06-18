import { Directive, Input, ElementRef } from '@angular/core';
import { DevicePosition } from '../device-position.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmDevicePosition]'
})
export class CdmDevicePositionDirective extends AbstractOutcomeDirective {

  @Input('cdmDevicePosition')
  value: DevicePosition;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case DevicePosition.INPOSITION:
        result = Outcome.SUCCESS;
        break;
      case DevicePosition.NOTINPOSITION:
      case DevicePosition.POSUNKNOWN:
      case DevicePosition.POSNOTSUPP:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



