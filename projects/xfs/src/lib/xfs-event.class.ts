import { RequestInitiatedEvent } from './request-initiated-event.class';
import { XfsCompleteEvent } from './xfs-complete-event.class';

export type XfsEvent<T> = RequestInitiatedEvent | XfsCompleteEvent;