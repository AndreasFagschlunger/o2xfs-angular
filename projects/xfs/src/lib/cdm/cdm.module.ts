import { NgModule } from '@angular/core';
import { CdmDeviceStateComponent } from './components/device-state.component';
import { CdmDeviceStateDirective } from './directives/device-state.directive';
import { CdmDispenserComponent } from './components/dispenser.component';
import { CdmDispenserDirective } from './directives/dispenser.directive';
import { CdmSafeDoorComponent } from './components/safe-door.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CdmDeviceStateComponent,
    CdmDeviceStateDirective,
    CdmDispenserComponent,
    CdmDispenserDirective,
    CdmSafeDoorComponent
  ],
  exports: [
    CdmDeviceStateComponent,
    CdmDeviceStateDirective,
    CdmDispenserComponent,
    CdmDispenserDirective,
    CdmSafeDoorComponent
  ]
})
export class XfsCdmModule { }
