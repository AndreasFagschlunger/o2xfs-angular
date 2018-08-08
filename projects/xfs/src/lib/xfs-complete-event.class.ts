import { WfsResult } from './wfs-result.model';
import { XfsEventType } from './xfs-event-type.enum';

export class XfsCompleteEvent {
    
    readonly type: XfsEventType.Complete;
    readonly result: WfsResult;

}