import { Component, Input } from '@angular/core';
import { PositionStatus } from '../position-status.enum';

@Component({
  selector: 'cdmPositionStatus',
  templateUrl: './position-status.component.html'
})
export class CdmPositionStatusComponent {

  @Input()
  value: PositionStatus;

}
