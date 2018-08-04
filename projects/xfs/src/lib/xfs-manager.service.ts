import { Injectable } from '@angular/core';

import { LogicalService } from './logical-service.model';
import { ServiceClass } from './service-class.enum';
import { Observable, Observer } from 'rxjs';
import { XfsDevice } from './xfs-device.model';
import { XfsEvent } from './xfs-event.class';
import { XfsHandler } from './xfs-handler.class';
import { GetInfoRequest } from './get-info-request.class';
import { map } from 'rxjs/operators';
import { XfsResponse } from './xfs-response.class';

const logicalServices: LogicalService[] = [
  { serviceClass: ServiceClass.CAM, name: 'Camera' },
  { serviceClass: ServiceClass.IDC, name: 'CardReader' },
  { serviceClass: ServiceClass.CDM, name: 'CashDispenser' },
  { serviceClass: ServiceClass.CDM, name: 'CoinDispenser' },
  { serviceClass: ServiceClass.PTR, name: 'DocumentPrinter' },
  { serviceClass: ServiceClass.PTR, name: 'ReceiptPrinter' },
  { serviceClass: ServiceClass.PTR, name: 'JournalPrinter' }
];

@Injectable({
  providedIn: 'root'
})
export class XfsManager {

  private services: XfsDevice[];

  constructor(private handler: XfsHandler) { }

  getLogicalServices(): LogicalService[] {
    return logicalServices;
  }

  getService(logicalName: string): XfsDevice | null {
    let result: XfsDevice | null = null;
    for(let each of this.services) {
      if(logicalName === each.logicalService.name) {
        result = each;
        break;
      }
    }
    return result;
  }

  getInfo<T>(logicalName: string, category: number, params: {
    queryDetails?: any,
    timeOut?: number,
  }): Observable<T> {
    let req: GetInfoRequest = new GetInfoRequest(logicalName, category, params);
    const events$: Observable<XfsEvent<any>> = this.handler.getInfo(req);
    return events$.pipe(map((res: XfsResponse<any>) => res.result.buffer));
  }
}
