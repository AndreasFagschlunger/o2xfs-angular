import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdmAntiFraudModuleComponent } from './components/anti-fraud-module.component';
import { CdmAntiFraudModuleDirective } from './directives/anti-fraud-module.directive';
import { CdmCashUnitStatusComponent } from './components/cash-unit-status.component';
import { CdmCashUnitStatusDirective } from './directives/cash-unit-status.directive';
import { CdmDevicePositionComponent } from './components/device-position.component';
import { CdmDevicePositionDirective } from './directives/device-position.directive';
import { CdmDeviceStateComponent } from './components/device-state.component';
import { CdmDeviceStateDirective } from './directives/device-state.directive';
import { CdmDispenserComponent } from './components/dispenser.component';
import { CdmDispenserDirective } from './directives/dispenser.directive';
import { CdmExchangeTypeComponent } from './components/exchange-type.component';
import { CdmExchangeTypeDirective } from './directives/exchange-type.directive';
import { CdmFailureComponent } from './components/failure.component';
import { CdmFailureDirective } from './directives/failure.directive';
import { CdmGuidLightsComponent } from './components/guid-lights.component';
import { CdmGuidLightsDirective } from './directives/guid-lights.directive';
import { CdmIncompleteRetractReasonComponent } from './components/incomplete-retract-reason.component';
import { CdmInputPositionComponent } from './components/input-position.component';
import { CdmInputPositionDirective } from './directives/input-position.directive';
import { CdmIntermediateStackerComponent } from './components/intermediate-stacker.component';
import { CdmIntermediateStackerDirective } from './directives/intermediate-stacker.directive';
import { CdmItemInfoTypeComponent } from './components/item-info-type.component';
import { CdmItemInfoTypeDirective } from './directives/item-info-type.directive';
import { CdmItemLocationComponent } from './components/item-location.component';
import { CdmItemLocationDirective } from './directives/item-location.directive';
import { CdmJammedShutterPositionComponent } from './components/jammed-shutter-position.component';
import { CdmJammedShutterPositionDirective } from './directives/jammed-shutter-position.directive';
import { CdmLevelComponent } from './components/level.component';
import { CdmLevelDirective } from './directives/level.directive';
import { CdmMixSubTypeComponent } from './components/mix-sub-type.component';
import { CdmMixTypeComponent } from './components/mix-type.component';
import { CdmMixTypeDirective } from './directives/mix-type.directive';
import { CdmMoveItemsComponent } from './components/move-items.component';
import { CdmMoveItemsDirective } from './directives/move-items.directive';
import { CdmNoteErrorReasonComponent } from './components/note-error-reason.component';
import { CdmOnBlacklistComponent } from './components/on-blacklist.component';
import { CdmOnBlacklistDirective } from './directives/on-blacklist.directive';
import { CdmPositionComponent } from './components/position.component';
import { CdmPositionStatusComponent } from './components/position-status.component';
import { CdmPositionStatusDirective } from './directives/position-status.directive';
import { CdmPresentStateComponent } from './components/present-state.component';
import { CdmPresentStateDirective } from './directives/present-state.directive';
import { CdmRetractAreaComponent } from './components/retract-area.component';
import { CdmRetractAreaDirective } from './directives/retract-area.directive';
import { CdmRetractStackerActionsComponent } from './components/retract-stacker-actions.component';
import { CdmRetractStackerActionsDirective } from './directives/retract-stacker-actions.directive';
import { CdmSafeDoorComponent } from './components/safe-door.component';
import { CdmSafeDoorDirective } from './directives/safe-door.directive';
import { CdmShutterComponent } from './components/shutter.component';
import { CdmShutterDirective } from './directives/shutter.directive';
import { CdmTellerUpdateActionComponent } from './components/teller-update-action.component';
import { CdmTellerUpdateActionDirective } from './directives/teller-update-action.directive';
import { CdmTransportComponent } from './components/transport.component';
import { CdmTransportDirective } from './directives/transport.directive';
import { CdmTransportStatusComponent } from './components/transport-status.component';
import { CdmTransportStatusDirective } from './directives/transport-status.directive';
import { CdmTypeComponent } from './components/type.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CdmAntiFraudModuleComponent,
    CdmAntiFraudModuleDirective,
    CdmCashUnitStatusComponent,
    CdmCashUnitStatusDirective,
    CdmDevicePositionComponent,
    CdmDevicePositionDirective,
    CdmDeviceStateComponent,
    CdmDeviceStateDirective,
    CdmDispenserComponent,
    CdmDispenserDirective,
    CdmExchangeTypeComponent,
    CdmExchangeTypeDirective,
    CdmFailureComponent,
    CdmFailureDirective,
    CdmGuidLightsComponent,
    CdmGuidLightsDirective,
    CdmIncompleteRetractReasonComponent,
    CdmInputPositionComponent,
    CdmInputPositionDirective,
    CdmIntermediateStackerComponent,
    CdmIntermediateStackerDirective,
    CdmItemInfoTypeComponent,
    CdmItemInfoTypeDirective,
    CdmItemLocationComponent,
    CdmItemLocationDirective,
    CdmJammedShutterPositionComponent,
    CdmJammedShutterPositionDirective,
    CdmLevelComponent,
    CdmLevelDirective,
    CdmMixSubTypeComponent,
    CdmMixTypeComponent,
    CdmMixTypeDirective,
    CdmMoveItemsComponent,
    CdmMoveItemsDirective,
    CdmNoteErrorReasonComponent,
    CdmOnBlacklistComponent,
    CdmOnBlacklistDirective,
    CdmPositionComponent,
    CdmPositionStatusComponent,
    CdmPositionStatusDirective,
    CdmPresentStateComponent,
    CdmPresentStateDirective,
    CdmRetractAreaComponent,
    CdmRetractAreaDirective,
    CdmRetractStackerActionsComponent,
    CdmRetractStackerActionsDirective,
    CdmSafeDoorComponent,
    CdmSafeDoorDirective,
    CdmShutterComponent,
    CdmShutterDirective,
    CdmTellerUpdateActionComponent,
    CdmTellerUpdateActionDirective,
    CdmTransportComponent,
    CdmTransportDirective,
    CdmTransportStatusComponent,
    CdmTransportStatusDirective,
    CdmTypeComponent,
  ],
  exports: [
    CdmAntiFraudModuleComponent,
    CdmAntiFraudModuleDirective,
    CdmCashUnitStatusComponent,
    CdmCashUnitStatusDirective,
    CdmDevicePositionComponent,
    CdmDevicePositionDirective,
    CdmDeviceStateComponent,
    CdmDeviceStateDirective,
    CdmDispenserComponent,
    CdmDispenserDirective,
    CdmExchangeTypeComponent,
    CdmExchangeTypeDirective,
    CdmFailureComponent,
    CdmFailureDirective,
    CdmGuidLightsComponent,
    CdmGuidLightsDirective,
    CdmIncompleteRetractReasonComponent,
    CdmInputPositionComponent,
    CdmInputPositionDirective,
    CdmIntermediateStackerComponent,
    CdmIntermediateStackerDirective,
    CdmItemInfoTypeComponent,
    CdmItemInfoTypeDirective,
    CdmItemLocationComponent,
    CdmItemLocationDirective,
    CdmJammedShutterPositionComponent,
    CdmJammedShutterPositionDirective,
    CdmLevelComponent,
    CdmLevelDirective,
    CdmMixSubTypeComponent,
    CdmMixTypeComponent,
    CdmMixTypeDirective,
    CdmMoveItemsComponent,
    CdmMoveItemsDirective,
    CdmNoteErrorReasonComponent,
    CdmOnBlacklistComponent,
    CdmOnBlacklistDirective,
    CdmPositionComponent,
    CdmPositionStatusComponent,
    CdmPositionStatusDirective,
    CdmPresentStateComponent,
    CdmPresentStateDirective,
    CdmRetractAreaComponent,
    CdmRetractAreaDirective,
    CdmRetractStackerActionsComponent,
    CdmRetractStackerActionsDirective,
    CdmSafeDoorComponent,
    CdmSafeDoorDirective,
    CdmShutterComponent,
    CdmShutterDirective,
    CdmTellerUpdateActionComponent,
    CdmTellerUpdateActionDirective,
    CdmTransportComponent,
    CdmTransportDirective,
    CdmTransportStatusComponent,
    CdmTransportStatusDirective,
    CdmTypeComponent,
  ]
})
export class XfsCdmModule { }
