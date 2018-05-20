import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { XfsModule } from 'xfs';
import { CashDispenserModule } from './cash-dispenser/cash-dispenser.module';
import { LoginComponent } from './login/login.component';
import { OperatorRoutingModule } from './operator-routing.module';

@NgModule({
  imports: [
    XfsModule,
    CashDispenserModule,
    OperatorRoutingModule
  ],
  declarations: [OperatorComponent, LoginComponent],
  exports: [OperatorComponent]
})
export class OperatorModule { }
