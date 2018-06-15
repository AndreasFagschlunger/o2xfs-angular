import { Component, OnInit, Input } from '@angular/core';
import { CdmDeviceState } from '../cdm-device-state.enum';

@Component({
  selector: 'cdmDeviceState',
  templateUrl: './device-state.component.html'
})
export class CdmDeviceStateComponent {

  @Input()
  value: CdmDeviceState;

}
