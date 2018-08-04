import { GetInfoRequest } from '../get-info-request.class';
import { XfsEvent } from '../xfs-event.class';
import { XfsHandler } from '../xfs-handler.class';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { XfsEventType } from '../xfs-event-type.enum';

@Injectable()
export class InMemoryXfsManagerImpl implements XfsHandler {

    private nextRequestId: number = 0;

    getInfo(req: GetInfoRequest): Observable<XfsEvent<any>> {
        return new Observable((observer: Observer<XfsEvent<any>>) => {
            this.nextRequestId++;
            observer.next({ type: XfsEventType.Initiated, requestId: this.nextRequestId });
        });
    }
}