import { Component, Input } from '@angular/core';
import { ExchangeType } from '../exchange-type.enum';

@Component({
  selector: 'cdmExchangeType',
  templateUrl: './exchange-type.component.html'
})
export class CdmExchangeTypeComponent {

  @Input()
  value: ExchangeType;

}
