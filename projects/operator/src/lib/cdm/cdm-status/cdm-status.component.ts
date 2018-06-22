import { Component, OnInit } from '@angular/core';

import { CdmStatus320 } from 'xfs320';
import { AntiFraudModule, DevicePosition, CdmGuidLights, Position, Shutter, PositionStatus, Transport, TransportStatus, IntermediateStacker, Dispenser, SafeDoor, CdmDeviceState } from 'xfs';

@Component({
  selector: 'lib-cdm-status',
  templateUrl: './cdm-status.component.html'
})
export class CdmStatusComponent implements OnInit {

  status: CdmStatus320;

  constructor() { }

  ngOnInit() {
    this.status = {
      deviceState: CdmDeviceState.OFFLINE,
      safeDoor: SafeDoor.CLOSED,
      dispenser: Dispenser.OK,
      intermediateStacker: IntermediateStacker.EMPTY,
      positions: [
        {
          position: Position.FRONT,
          shutter: Shutter.CLOSED,
          positionStatus: PositionStatus.EMPTY,
          transport: Transport.OK,
          transportStatus: TransportStatus.EMPTY
        }
      ],
      extra: {
        'Key 1': 'Value 1',
        'Key 2': 'Value 2'
      },
      guidLights: [
        [],
        [],
        [CdmGuidLights.BLUE, CdmGuidLights.QUICK_FLASH],
        [CdmGuidLights.MEDIUM_FLASH, CdmGuidLights.GREEN],
        [CdmGuidLights.RED, CdmGuidLights.SLOW_FLASH],
        [CdmGuidLights.MAGENTA, CdmGuidLights.CONTINUOUS],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
      ],
      devicePosition: DevicePosition.INPOSITION,
      powerSaveRecoveryTime: 2000,
      antiFraudModule: AntiFraudModule.OK
    };
    window.setInterval(() => {
      if (this.status.deviceState === CdmDeviceState.ONLINE) {
        this.status.deviceState = CdmDeviceState.OFFLINE;
      } else {
        this.status.deviceState = CdmDeviceState.ONLINE;
      }
    }, 2000);
  }

  extraKeys(): string[] {
    return Object.getOwnPropertyNames(this.status.extra);
  }
}
