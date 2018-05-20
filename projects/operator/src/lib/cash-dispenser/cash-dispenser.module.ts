import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashDispenserRoutingModule } from './cash-dispenser-routing.module';
import { CashDispenserListComponent } from './cash-dispenser-list/cash-dispenser-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';

@NgModule({
  imports: [
    CommonModule,
    CashDispenserRoutingModule
  ],
  declarations: [CashDispenserListComponent, CdmStatusComponent]
})
export class CashDispenserModule { }
