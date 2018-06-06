import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CdmListComponent } from './cdm-list/cdm-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';
import { AuthGuard } from '../auth-guard.service';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'status', component: CdmStatusComponent },
      { path: '**', component: CdmListComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdmRoutingModule { }
