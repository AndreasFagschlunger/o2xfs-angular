import { Directive, Input, ElementRef } from '@angular/core';
import { CdmInfoCommand } from '../cdm-info-command.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmCdmInfoCommand]'
})
export class CdmCdmInfoCommandDirective extends AbstractOutcomeDirective {

  @Input('cdmCdmInfoCommand')
  value: CdmInfoCommand;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CdmInfoCommand.STATUS:
      case CdmInfoCommand.CAPABILITIES:
      case CdmInfoCommand.CASH_UNIT_INFO:
      case CdmInfoCommand.TELLER_INFO:
      case CdmInfoCommand.CURRENCY_EXP:
      case CdmInfoCommand.MIX_TYPES:
      case CdmInfoCommand.MIX_TABLE:
      case CdmInfoCommand.PRESENT_STATUS:
      case CdmInfoCommand.GET_ITEM_INFO:
      case CdmInfoCommand.GET_BLACKLIST:
      case CdmInfoCommand.GET_ALL_ITEMS_INFO:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



