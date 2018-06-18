import { Component, Input } from '@angular/core';
import { IncompleteRetractReason } from '../incomplete-retract-reason.enum';

@Component({
  selector: 'cdmIncompleteRetractReason',
  templateUrl: './incomplete-retract-reason.component.html'
})
export class CdmIncompleteRetractReasonComponent {

  @Input()
  value: IncompleteRetractReason;

}
