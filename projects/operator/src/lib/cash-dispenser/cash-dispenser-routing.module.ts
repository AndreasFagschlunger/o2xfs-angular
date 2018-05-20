import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CashDispenserListComponent } from './cash-dispenser-list/cash-dispenser-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: 'cdm',
    children: [
      { path: 'status', component: CdmStatusComponent },
      { path: '', component: CashDispenserListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CashDispenserRoutingModule { }
