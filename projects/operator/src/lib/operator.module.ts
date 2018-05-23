import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { LoginComponent } from './login/login.component';
import { OperatorRoutingModule } from './operator-routing.module';

@NgModule({
  imports: [
    OperatorRoutingModule
  ],
  declarations: [OperatorComponent, LoginComponent],
  exports: [OperatorComponent]
})
export class OperatorModule { }
