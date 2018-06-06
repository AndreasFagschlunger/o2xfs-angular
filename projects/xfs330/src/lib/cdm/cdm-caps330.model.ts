import { CdmExecuteCommand, ItemInfoType } from 'xfs';
import { CdmCaps320 } from 'xfs320';

export interface CdmCaps330 extends CdmCaps320 {

    itemInfoTypes: ItemInfoType[];
    blacklist: boolean;
    synchronizableCommands: CdmExecuteCommand[];

}
