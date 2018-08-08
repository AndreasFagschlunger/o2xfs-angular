import { Observable } from 'rxjs';
import { GetInfoRequest } from './get-info-request.class';
import { LogicalService } from './logical-service.model';
import { XfsEvent } from './xfs-event.class';

export abstract class XfsHandler {

    abstract getLogicalServices(): LogicalService[];

    abstract cancel(logicalName: string, requestId: number);

    abstract getInfo(req: GetInfoRequest): Observable<XfsEvent<any>>;

}