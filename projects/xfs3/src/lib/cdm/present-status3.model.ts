import { Denomination3 } from './denomination3.model';
import { PresentState } from 'xfs';

export interface PresentStatus3 {

    denomination: Denomination3;
    presentState: PresentState;
    extra: object;

}
