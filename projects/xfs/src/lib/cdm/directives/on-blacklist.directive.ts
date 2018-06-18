import { Directive, Input, ElementRef } from '@angular/core';
import { OnBlacklist } from '../on-blacklist.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmOnBlacklist]'
})
export class CdmOnBlacklistDirective extends AbstractOutcomeDirective {

  @Input('cdmOnBlacklist')
  value: OnBlacklist;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case OnBlacklist.ONBLACKLIST:
      case OnBlacklist.NOTONBLACKLIST:
      case OnBlacklist.BLACKLISTUNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



