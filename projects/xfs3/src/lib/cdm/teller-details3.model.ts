import { TellerTotals3 } from './teller-totals3.model';
import { InputPosition, Position } from 'xfs';

export interface TellerDetails3 {

    tellerID: number;
    inputPosition: InputPosition;
    outputPosition: Position;
    tellerTotals: TellerTotals3[];

}
