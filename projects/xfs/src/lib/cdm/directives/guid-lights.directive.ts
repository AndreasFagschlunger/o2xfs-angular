import { Directive, Input, ElementRef } from '@angular/core';
import { CdmGuidLights } from '../cdm-guid-lights.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmGuidLights]'
})
export class CdmGuidLightsDirective extends AbstractOutcomeDirective {

  @Input('cdmGuidLights')
  value: CdmGuidLights;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CdmGuidLights.OFF:
      case CdmGuidLights.SLOW_FLASH:
      case CdmGuidLights.MEDIUM_FLASH:
      case CdmGuidLights.QUICK_FLASH:
      case CdmGuidLights.CONTINUOUS:
      case CdmGuidLights.RED:
      case CdmGuidLights.GREEN:
      case CdmGuidLights.YELLOW:
      case CdmGuidLights.BLUE:
      case CdmGuidLights.CYAN:
      case CdmGuidLights.MAGENTA:
      case CdmGuidLights.WHITE:
      case CdmGuidLights.NOT_AVAILABLE:
      case CdmGuidLights.EXIT:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



