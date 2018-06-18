import { Directive, Input, ElementRef } from '@angular/core';
import { CdmMessage } from '../cdm-message.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmCdmMessage]'
})
export class CdmCdmMessageDirective extends AbstractOutcomeDirective {

  @Input('cdmCdmMessage')
  value: CdmMessage;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CdmMessage.SRVE_CDM_SAFEDOOROPEN:
      case CdmMessage.SRVE_CDM_SAFEDOORCLOSED:
      case CdmMessage.USRE_CDM_CASHUNITTHRESHOLD:
      case CdmMessage.SRVE_CDM_CASHUNITINFOCHANGED:
      case CdmMessage.SRVE_CDM_TELLERINFOCHANGED:
      case CdmMessage.EXEE_CDM_DELAYEDDISPENSE:
      case CdmMessage.EXEE_CDM_STARTDISPENSE:
      case CdmMessage.EXEE_CDM_CASHUNITERROR:
      case CdmMessage.SRVE_CDM_ITEMSTAKEN:
      case CdmMessage.EXEE_CDM_PARTIALDISPENSE:
      case CdmMessage.EXEE_CDM_SUBDISPENSEOK:
      case CdmMessage.SRVE_CDM_ITEMSPRESENTED:
      case CdmMessage.SRVE_CDM_COUNTS_CHANGED:
      case CdmMessage.EXEE_CDM_INCOMPLETEDISPENSE:
      case CdmMessage.EXEE_CDM_NOTEERROR:
      case CdmMessage.EXEE_CDM_MEDIADETECTED:
      case CdmMessage.SRVE_CDM_MEDIADETECTED:
      case CdmMessage.EXEE_CDM_INPUT_P6:
      case CdmMessage.SRVE_CDM_DEVICEPOSITION:
      case CdmMessage.SRVE_CDM_POWER_SAVE_CHANGE:
      case CdmMessage.EXEE_CDM_INFO_AVAILABLE:
      case CdmMessage.EXEE_CDM_INCOMPLETERETRACT:
      case CdmMessage.SRVE_CDM_SHUTTERSTATUSCHANGED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



