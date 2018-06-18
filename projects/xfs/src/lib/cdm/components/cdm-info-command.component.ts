import { Component, Input } from '@angular/core';
import { CdmInfoCommand } from '../cdm-info-command.enum';

@Component({
  selector: 'cdmCdmInfoCommand',
  templateUrl: './cdm-info-command.component.html'
})
export class CdmCdmInfoCommandComponent {

  @Input()
  value: CdmInfoCommand;

}
