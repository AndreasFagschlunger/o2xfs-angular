import { Component, Input } from '@angular/core';
import { TellerUpdateAction } from '../teller-update-action.enum';

@Component({
  selector: 'cdmTellerUpdateAction',
  templateUrl: './teller-update-action.component.html'
})
export class CdmTellerUpdateActionComponent {

  @Input()
  value: TellerUpdateAction;

}
