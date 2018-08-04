import { XfsEventType } from './xfs-event-type.enum';

export interface RequestInitiated {

    type: XfsEventType.Initiated;
    requestId: number;

}