import { CashUnitStatus } from 'xfs';

export interface CountedPhysicalCashUnit3 {

    physicalPositionName: string;
    unitId: string[];
    dispensed: number;
    counted: number;
    pStatus: CashUnitStatus;

}
