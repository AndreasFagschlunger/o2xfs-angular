import { Directive, Input, ElementRef } from '@angular/core';
import { CdmError } from '../cdm-error.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmCdmError]'
})
export class CdmCdmErrorDirective extends AbstractOutcomeDirective {

  @Input('cdmCdmError')
  value: CdmError;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CdmError.INVALIDCURRENCY:
      case CdmError.INVALIDTELLERID:
      case CdmError.CASHUNITERROR:
      case CdmError.INVALIDDENOMINATION:
      case CdmError.INVALIDMIXNUMBER:
      case CdmError.NOCURRENCYMIX:
      case CdmError.NOTDISPENSABLE:
      case CdmError.TOOMANYITEMS:
      case CdmError.UNSUPPOSITION:
      case CdmError.SAFEDOOROPEN:
      case CdmError.SHUTTERNOTOPEN:
      case CdmError.SHUTTEROPEN:
      case CdmError.SHUTTERCLOSED:
      case CdmError.INVALIDCASHUNIT:
      case CdmError.NOITEMS:
      case CdmError.EXCHANGEACTIVE:
      case CdmError.NOEXCHANGEACTIVE:
      case CdmError.SHUTTERNOTCLOSED:
      case CdmError.PRERRORNOITEMS:
      case CdmError.PRERRORITEMS:
      case CdmError.PRERRORUNKNOWN:
      case CdmError.ITEMSTAKEN:
      case CdmError.INVALIDMIXTABLE:
      case CdmError.OUTPUTPOS_NOT_EMPTY:
      case CdmError.INVALIDRETRACTPOSITION:
      case CdmError.NOTRETRACTAREA:
      case CdmError.NOCASHBOXPRESENT:
      case CdmError.AMOUNTNOTINMIXTABLE:
      case CdmError.ITEMSNOTTAKEN:
      case CdmError.ITEMSLEFT:
      case CdmError.INVALID_PORT:
      case CdmError.POWERSAVETOOSHORT:
      case CdmError.POWERSAVEMEDIAPRESENT:
      case CdmError.POSITION_NOT_EMPTY:
      case CdmError.INCOMPLETERETRACT:
      case CdmError.COMMANDUNSUPP:
      case CdmError.SYNCHRONIZEUNSUPP:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



