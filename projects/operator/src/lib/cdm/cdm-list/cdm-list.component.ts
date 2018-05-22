import { Component, OnInit } from '@angular/core';
import { LogicalService, ServiceClass, XfsService } from 'xfs';

@Component({
  selector: 'cdm-list',
  templateUrl: './cdm-list.component.html',
  styleUrls: ['./cdm-list.component.scss']
})
export class CdmListComponent implements OnInit {

  cashDispensers: LogicalService[];

  constructor(private xfsService: XfsService) { }

  ngOnInit() {
    this.cashDispensers = this.xfsService.getLogicalServices().filter(e => ServiceClass.CDM === e.serviceClass);
  }

}
