import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdmRoutingModule } from './cdm-routing.module';
import { CdmListComponent } from './cdm-list/cdm-list.component';
import { CdmStatusComponent } from './cdm-status/cdm-status.component';
import { XfsCdmModule } from 'xfs';

@NgModule({
  imports: [
    CommonModule,
    CdmRoutingModule,
    XfsCdmModule
  ],
  declarations: [CdmListComponent, CdmStatusComponent]
})
export class CdmModule { }
