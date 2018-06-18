import { Component, Input } from '@angular/core';
import { CdmType } from '../cdm-type.enum';

@Component({
  selector: 'cdmType',
  templateUrl: './type.component.html'
})
export class CdmTypeComponent {

  @Input()
  value: CdmType;

}
