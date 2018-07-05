import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { LoginComponent } from './login/login.component';
import { OperatorRoutingModule } from './operator-routing.module';
import { MenuModule } from './menu/menu.module';
import { MenuService } from './menu/menu.service';

@NgModule({
  imports: [
    OperatorRoutingModule,
    MenuModule
  ],
  declarations: [OperatorComponent, LoginComponent],
  exports: [OperatorComponent],
  providers: []
})
export class OperatorModule { }
