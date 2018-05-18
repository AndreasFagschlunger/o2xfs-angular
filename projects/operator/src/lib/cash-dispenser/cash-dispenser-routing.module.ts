import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashDispenserListComponent } from './cash-dispenser-list/cash-dispenser-list.component';

const routes: Routes = [
  { path: 'cash-dispensers', component: CashDispenserListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashDispenserRoutingModule { }
