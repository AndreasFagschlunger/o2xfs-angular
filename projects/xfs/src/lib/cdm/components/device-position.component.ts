import { Component, Input } from '@angular/core';
import { DevicePosition } from '../device-position.enum';

@Component({
  selector: 'cdmDevicePosition',
  templateUrl: './device-position.component.html'
})
export class CdmDevicePositionComponent {

  @Input()
  value: DevicePosition;

}
