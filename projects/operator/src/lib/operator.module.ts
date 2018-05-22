import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { XfsModule } from 'xfs';
import { CdmModule } from './cdm/cdm.module';
import { LoginComponent } from './login/login.component';
import { OperatorRoutingModule } from './operator-routing.module';

@NgModule({
  imports: [
    XfsModule,
    CdmModule,
    OperatorRoutingModule
  ],
  declarations: [OperatorComponent, LoginComponent],
  exports: [OperatorComponent]
})
export class OperatorModule { }
