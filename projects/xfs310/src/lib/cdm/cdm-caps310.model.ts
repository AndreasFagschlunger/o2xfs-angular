import { CdmGuidLights } from 'xfs';
import { CdmCaps3 } from 'xfs3';

export interface CdmCaps310 extends CdmCaps3 {

    guidLights: CdmGuidLights[][];
    powerSaveControl: boolean;
    prepareDispense: boolean;

}
