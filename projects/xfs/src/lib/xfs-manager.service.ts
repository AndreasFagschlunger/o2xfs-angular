import { Injectable } from '@angular/core';

import { LogicalService } from './logical-service.model';
import { Observable, Observer } from 'rxjs';
import { XfsService } from './xfs-service.class';
import { XfsEvent } from './xfs-event.class';
import { XfsHandler } from './xfs-handler.class';
import { GetInfoRequest } from './get-info-request.class';
import { XfsEventType } from './xfs-event-type.enum';



@Injectable({
  providedIn: 'root'
})
export class XfsManager {

  private services: XfsService[];

  constructor(private handler: XfsHandler) { }

  getLogicalServices(): LogicalService[] {
    return this.handler.getLogicalServices();
  }

  getService(logicalName: string): XfsService | null {
    let result: XfsService | null = null;
    for (let each of this.services) {
      if (logicalName === each.logicalService.name) {
        result = each;
        break;
      }
    }
    return result;
  }

  getInfo<T>(logicalName: string, category: number, params?: {
    queryDetails?: any,
    timeOut?: number,
  }): Observable<T> {

    return new Observable((observer: Observer<T>) => {
      let req: GetInfoRequest = new GetInfoRequest(logicalName, category, params);
      let requestId: number = 0;
      let complete: boolean = false;

      const next = (event: XfsEvent<any>) => {
        if (event.type == XfsEventType.Initiated) {
          requestId = event.requestId;
        } else if (event.type == XfsEventType.Complete) {
          complete = true;
          if (event.result.errorCode !== 0) {
            observer.error('Error: ' + event.result.errorCode);
          } else {
            observer.next(event.result.buffer);
            observer.complete();
          }
        }
      };

      this.handler.getInfo(req).subscribe(next, observer.error);

      return () => {
        if (requestId && !complete) {
          this.handler.cancel(logicalName, requestId);
        }
      };
    });
  }
}
