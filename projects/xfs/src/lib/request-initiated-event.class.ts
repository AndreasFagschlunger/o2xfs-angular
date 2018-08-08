import { XfsEventType } from './xfs-event-type.enum';

export interface RequestInitiatedEvent {

    type: XfsEventType.Initiated;
    requestId: number;

}