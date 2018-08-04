import { Injectable } from '@angular/core';

import { Observable, Observer } from 'rxjs';

import { GetInfoRequest } from '../get-info-request.class';
import { XfsHandler } from '../xfs-handler.class';

@Injectable()
export class XfsTestingHandler implements XfsHandler {

    private nextRequestId: number = 0;

    getInfo(req: GetInfoRequest): Observable<any> {
        return new Observable((observer: Observer<any>) => {

        });
    }
}