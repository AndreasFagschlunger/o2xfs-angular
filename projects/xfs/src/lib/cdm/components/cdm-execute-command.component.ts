import { Component, Input } from '@angular/core';
import { CdmExecuteCommand } from '../cdm-execute-command.enum';

@Component({
  selector: 'cdmCdmExecuteCommand',
  templateUrl: './cdm-execute-command.component.html'
})
export class CdmCdmExecuteCommandComponent {

  @Input()
  value: CdmExecuteCommand;

}
