import { Component, Input } from '@angular/core';
import { CdmGuidPosition } from '../cdm-guid-position.enum';

@Component({
  selector: 'cdmGuidPosition',
  templateUrl: './guid-position.component.html'
})
export class CdmGuidPositionComponent {

  @Input()
  value: CdmGuidPosition;

}
