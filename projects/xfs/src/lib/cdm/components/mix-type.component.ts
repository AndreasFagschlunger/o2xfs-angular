import { Component, Input } from '@angular/core';
import { MixType } from '../mix-type.enum';

@Component({
  selector: 'cdmMixType',
  templateUrl: './mix-type.component.html'
})
export class CdmMixTypeComponent {

  @Input()
  value: MixType;

}
