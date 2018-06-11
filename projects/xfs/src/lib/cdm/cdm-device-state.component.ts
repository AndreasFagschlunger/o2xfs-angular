import { Component, OnInit, Input } from '@angular/core';
import { CdmDeviceState } from '.';

@Component({
  selector: 'cdmDeviceState',
  templateUrl: './cdm-device-state.component.html'
})
export class CdmDeviceStateComponent {

  @Input()
  value: CdmDeviceState;

}
