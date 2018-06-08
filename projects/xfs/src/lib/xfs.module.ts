import { NgModule } from '@angular/core';
import { XfsComponent } from './xfs.component';
import { DeviceStateDirective } from './cdm/device-state.directive';

@NgModule({
  imports: [
  ],
  declarations: [XfsComponent, DeviceStateDirective],
  exports: [XfsComponent, DeviceStateDirective ]
})
export class XfsModule { }
