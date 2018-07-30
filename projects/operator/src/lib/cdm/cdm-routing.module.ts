import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdmListComponent } from './cdm-list/cdm-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';
import { DispenseComponent } from './dispense/dispense.component';
import { CdmGuard } from './cdm-guard.service';

const routes: Routes = [
  {
    path: '',
    canActivateChild: [CdmGuard],
    children: [
      { path: 'status', component: CdmStatusComponent },
      { path: 'dispense', component: DispenseComponent },
      { path: 'select', component: CdmListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CdmGuard]
})
export class CdmRoutingModule { }
