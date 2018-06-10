import { NgModule } from '@angular/core';
import { XfsComponent } from './xfs.component';
import { DeviceStateDirective } from './cdm/device-state.directive';
import { CdmDeviceStateComponent } from './cdm/cdm-device-state.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XfsComponent, CdmDeviceStateComponent, DeviceStateDirective],
  exports: [XfsComponent, CdmDeviceStateComponent, DeviceStateDirective ]
})
export class XfsModule { }
