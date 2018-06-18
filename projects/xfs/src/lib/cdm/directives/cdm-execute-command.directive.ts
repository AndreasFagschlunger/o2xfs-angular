import { Directive, Input, ElementRef } from '@angular/core';
import { CdmExecuteCommand } from '../cdm-execute-command.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmCdmExecuteCommand]'
})
export class CdmCdmExecuteCommandDirective extends AbstractOutcomeDirective {

  @Input('cdmCdmExecuteCommand')
  value: CdmExecuteCommand;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case CdmExecuteCommand.DENOMINATE:
      case CdmExecuteCommand.DISPENSE:
      case CdmExecuteCommand.PRESENT:
      case CdmExecuteCommand.REJECT:
      case CdmExecuteCommand.RETRACT:
      case CdmExecuteCommand.OPEN_SHUTTER:
      case CdmExecuteCommand.CLOSE_SHUTTER:
      case CdmExecuteCommand.SET_TELLER_INFO:
      case CdmExecuteCommand.SET_CASH_UNIT_INFO:
      case CdmExecuteCommand.START_EXCHANGE:
      case CdmExecuteCommand.END_EXCHANGE:
      case CdmExecuteCommand.OPEN_SAFE_DOOR:
      case CdmExecuteCommand.CALIBRATE_CASH_UNIT:
      case CdmExecuteCommand.SET_MIX_TABLE:
      case CdmExecuteCommand.RESET:
      case CdmExecuteCommand.TEST_CASH_UNITS:
      case CdmExecuteCommand.COUNT:
      case CdmExecuteCommand.SET_GUIDANCE_LIGHT:
      case CdmExecuteCommand.POWER_SAVE_CONTROL:
      case CdmExecuteCommand.PREPARE_DISPENSE:
      case CdmExecuteCommand.SET_BLACKLIST:
      case CdmExecuteCommand.SYNCHRONIZE_COMMAND:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



