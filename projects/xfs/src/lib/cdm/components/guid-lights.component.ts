import { Component, Input } from '@angular/core';
import { CdmGuidLights } from '../cdm-guid-lights.enum';

@Component({
  selector: 'cdmGuidLights',
  templateUrl: './guid-lights.component.html'
})
export class CdmGuidLightsComponent {

  @Input()
  values: CdmGuidLights[];

}
