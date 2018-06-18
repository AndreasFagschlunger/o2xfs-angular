import { Component, Input } from '@angular/core';
import { Transport } from '../transport.enum';

@Component({
  selector: 'cdmTransport',
  templateUrl: './transport.component.html'
})
export class CdmTransportComponent {

  @Input()
  value: Transport;

}
