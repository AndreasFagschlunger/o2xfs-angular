import { Denomination3 } from './denomination3.model';
import { Position } from 'xfs';

export interface Dispense3 {

    tellerID: number;
    mixNumber: number;
    position: Position;
    present: boolean;
    denomination: Denomination3;

}
