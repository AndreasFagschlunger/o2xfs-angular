import { PhysicalCashUnit3 } from './physical-cash-unit3.model';
import { CashUnitStatus, CashUnitType } from 'xfs';

export interface CashUnit3 {

    number: number;
    type: CashUnitType;
    cashUnitName: string;
    unitID: string[];
    currencyID: string[];
    value: number;
    initialCount: number;
    count: number;
    rejectCount: number;
    minimum: number;
    maximum: number;
    appLock: boolean;
    status: CashUnitStatus;
    numPhysicalCUs: number;
    physical: PhysicalCashUnit3[];

}
