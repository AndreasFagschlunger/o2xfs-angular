import { Injectable } from '@angular/core';

import { LogicalService } from './logical-service.model';
import { ServiceClass } from './service-class.enum';

const logicalServices: LogicalService[] = [
  { serviceClass: ServiceClass.CAM, name: 'Camera' },
  { serviceClass: ServiceClass.IDC, name: 'CardReader' },
  { serviceClass: ServiceClass.CDM, name: 'CashDispenser1' },
  { serviceClass: ServiceClass.CDM, name: 'CashDispenser2' },
  { serviceClass: ServiceClass.PTR, name: 'DocumentPrinter' },
  { serviceClass: ServiceClass.PTR, name: 'ReceiptPrinter' },
  { serviceClass: ServiceClass.PTR, name: 'JournalPrinter' }
];

@Injectable({
  providedIn: 'root'
})
export class XfsService {

  constructor() { }

  getLogicalServices(): LogicalService[] {
    return logicalServices;
  }
}
