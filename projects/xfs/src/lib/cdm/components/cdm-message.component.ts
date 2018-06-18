import { Component, Input } from '@angular/core';
import { CdmMessage } from '../cdm-message.enum';

@Component({
  selector: 'cdmCdmMessage',
  templateUrl: './cdm-message.component.html'
})
export class CdmCdmMessageComponent {

  @Input()
  value: CdmMessage;

}
