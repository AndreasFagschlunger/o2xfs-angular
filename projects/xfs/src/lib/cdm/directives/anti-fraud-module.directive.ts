import { Directive, Input, ElementRef } from '@angular/core';
import { AntiFraudModule } from '../anti-fraud-module.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmAntiFraudModule]'
})
export class CdmAntiFraudModuleDirective extends AbstractOutcomeDirective {

  @Input('cdmAntiFraudModule')
  value: AntiFraudModule;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case AntiFraudModule.NOTSUPP:
        result = Outcome.NONE;
        break;
      case AntiFraudModule.OK:
        result = Outcome.SUCCESS;
        break;
      case AntiFraudModule.INOP:
      case AntiFraudModule.DEVICEDETECTED:
      case AntiFraudModule.UNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



