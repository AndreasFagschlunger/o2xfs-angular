import { NgModule } from '@angular/core';
import { XfsComponent } from './xfs.component';
import { CdmDeviceStateDirective } from './cdm/directives/cdm-device-state.directive';
import { CdmDeviceStateComponent } from './cdm/cdm-device-state.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XfsComponent, CdmDeviceStateComponent, CdmDeviceStateDirective],
  exports: [XfsComponent, CdmDeviceStateComponent, CdmDeviceStateDirective]
})
export class XfsModule { }
