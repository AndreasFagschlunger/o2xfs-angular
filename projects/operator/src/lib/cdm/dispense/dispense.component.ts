import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CdmInfoCommand, XfsManager } from 'xfs';
import { filter } from 'rxjs/operators';
import { XfsMessage } from 'dist/xfs/lib/xfs-message.enum';
import { CashUnitInfo3 } from 'xfs3';

@Component({
  selector: 'cdm-dispense',
  templateUrl: './dispense.component.html',
})
export class DispenseComponent implements OnInit {

  cashUnitInfo: CashUnitInfo3;

  constructor(private route: ActivatedRoute, private xfsManager: XfsManager) { }

  ngOnInit() {
    const logicalName = this.route.snapshot.paramMap.get('logicalName');
    this.xfsManager.getInfo<CashUnitInfo3>(logicalName!, CdmInfoCommand.CASH_UNIT_INFO).subscribe(cashUnitInfo => this.cashUnitInfo = cashUnitInfo);
  }
}
