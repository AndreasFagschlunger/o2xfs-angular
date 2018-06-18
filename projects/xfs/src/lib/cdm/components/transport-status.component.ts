import { Component, Input } from '@angular/core';
import { TransportStatus } from '../transport-status.enum';

@Component({
  selector: 'cdmTransportStatus',
  templateUrl: './transport-status.component.html'
})
export class CdmTransportStatusComponent {

  @Input()
  value: TransportStatus;

}
