import { TellerDetails3 } from './teller-details3.model';
import { TellerUpdateAction } from 'xfs';

export interface TellerUpdate3 {

    action: TellerUpdateAction;
    tellerDetails: TellerDetails3;

}
