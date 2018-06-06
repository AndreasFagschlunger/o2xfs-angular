import { OutputPosition3 } from './output-position3.model';
import { CdmDeviceState, Dispenser, IntermediateStacker, SafeDoor } from 'xfs';

export interface CdmStatus3 {

    deviceState: CdmDeviceState;
    safeDoor: SafeDoor;
    dispenser: Dispenser;
    intermediateStacker: IntermediateStacker;
    positions: OutputPosition3[];
    extra: object;

}
