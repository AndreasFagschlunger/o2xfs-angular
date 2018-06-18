import { Component, Input } from '@angular/core';
import { MixSubType } from '../mix-sub-type.enum';

@Component({
  selector: 'cdmMixSubType',
  templateUrl: './mix-sub-type.component.html'
})
export class CdmMixSubTypeComponent {

  @Input()
  value: MixSubType;

}
