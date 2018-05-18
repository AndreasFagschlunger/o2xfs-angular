import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CashDispenserRoutingModule } from './cash-dispenser-routing.module';
import { CashDispenserListComponent } from './cash-dispenser-list/cash-dispenser-list.component';

@NgModule({
  imports: [
    CommonModule,
    CashDispenserRoutingModule
  ],
  declarations: [CashDispenserListComponent]
})
export class CashDispenserModule { }
