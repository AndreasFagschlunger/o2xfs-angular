import { CdmGuidLights, DevicePosition } from 'xfs';
import { CdmStatus3 } from 'xfs3';

export interface CdmStatus310 extends CdmStatus3 {

    guidLights: CdmGuidLights[][];
    devicePosition: DevicePosition;
    powerSaveRecoveryTime: number;

}
