import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';

import { GetInfoRequest } from '../get-info-request.class';
import { LogicalService } from '../logical-service.model';
import { ServiceClass } from '../service-class.enum';
import { XfsEvent } from '../xfs-event.class';
import { XfsEventType } from '../xfs-event-type.enum';
import { XfsHandler } from '../xfs-handler.class';

const logicalServices: LogicalService[] = [
    { serviceClass: ServiceClass.CAM, name: 'Camera' },
    { serviceClass: ServiceClass.IDC, name: 'CardReader' },
    { serviceClass: ServiceClass.CDM, name: 'CashDispenser' },
    { serviceClass: ServiceClass.CDM, name: 'CoinDispenser' },
    { serviceClass: ServiceClass.PTR, name: 'DocumentPrinter' },
    { serviceClass: ServiceClass.PTR, name: 'ReceiptPrinter' },
    { serviceClass: ServiceClass.PTR, name: 'JournalPrinter' }
  ];

@Injectable()
export class InMemoryXfsManagerImpl implements XfsHandler {

    private nextRequestId: number = 0;

    getLogicalServices(): LogicalService[] {
        return logicalServices;
    }

    cancel(logicalName: string, requestId: number) { }

    getInfo(req: GetInfoRequest): Observable<XfsEvent<any>> {
        return new Observable((observer: Observer<XfsEvent<any>>) => {
            this.nextRequestId++;
            observer.next({ type: XfsEventType.Initiated, requestId: this.nextRequestId });
        });
    }
}