import { CashUnitStatus } from 'xfs';

export interface PhysicalCashUnit3 {

    physicalPositionName: string;
    unitID: string[];
    initialCount: number;
    count: number;
    rejectCount: number;
    maximum: number;
    pStatus: CashUnitStatus;
    hardwareSensor: boolean;

}
