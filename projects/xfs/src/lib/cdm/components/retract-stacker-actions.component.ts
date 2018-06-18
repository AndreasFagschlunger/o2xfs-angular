import { Component, Input } from '@angular/core';
import { RetractStackerActions } from '../retract-stacker-actions.enum';

@Component({
  selector: 'cdmRetractStackerActions',
  templateUrl: './retract-stacker-actions.component.html'
})
export class CdmRetractStackerActionsComponent {

  @Input()
  value: RetractStackerActions;

}
