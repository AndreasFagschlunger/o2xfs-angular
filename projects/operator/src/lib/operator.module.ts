import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { XfsModule } from 'xfs';
import { CashDispenserModule } from './cash-dispenser/cash-dispenser.module';

@NgModule({
  imports: [
    XfsModule,
    CashDispenserModule
  ],
  declarations: [OperatorComponent],
  exports: [OperatorComponent]
})
export class OperatorModule { }
