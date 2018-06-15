import { Directive, Input, ElementRef, OnInit, HostBinding, OnChanges, SimpleChanges } from '@angular/core';
import { CdmDeviceState } from '../cdm-device-state.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmDeviceState]'
})
export class CdmDeviceStateDirective extends AbstractOutcomeDirective {

  @Input('cdmDeviceState')
  deviceState: CdmDeviceState;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.deviceState) {
      case CdmDeviceState.ONLINE:
        result = Outcome.SUCCESS;
      break;
      case CdmDeviceState.OFFLINE:
      case CdmDeviceState.POWEROFF:
      case CdmDeviceState.NODEVICE:
      case CdmDeviceState.HWERROR:
      case CdmDeviceState.FRAUDATTEMPT:
      result = Outcome.ERROR;
      break;
      default:
      result = Outcome.WARNING;
      break;
    }
    return result;
  }
}
