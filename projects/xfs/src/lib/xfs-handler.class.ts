import { Observable } from 'rxjs';
import { GetInfoRequest } from './get-info-request.class';
import { XfsEvent } from './xfs-event.class';

export abstract class XfsHandler {

    abstract getInfo(req: GetInfoRequest): Observable<XfsEvent<any>>;
    
}