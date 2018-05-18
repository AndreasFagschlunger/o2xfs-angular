import { Component, OnInit } from '@angular/core';
import { LogicalService, ServiceClass, XfsService } from 'xfs';

@Component({
  selector: 'cash-dispenser-list',
  templateUrl: './cash-dispenser-list.component.html',
  styleUrls: ['./cash-dispenser-list.component.scss']
})
export class CashDispenserListComponent implements OnInit {

  cashDispensers: LogicalService[];

  constructor(private xfsService: XfsService) { }

  ngOnInit() {
    this.cashDispensers = this.xfsService.getLogicalServices().filter(e => ServiceClass.CDM === e.serviceClass);
  }

}
