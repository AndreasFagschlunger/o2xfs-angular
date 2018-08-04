import { WfsResult } from './wfs-result.model';
import { XfsMessage } from './xfs-message.enum';

export class XfsResponse<T> {

    readonly msg: XfsMessage;
    readonly result: WfsResult;

}