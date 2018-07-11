import { NgModule } from '@angular/core';
import { OperatorComponent } from './operator.component';
import { LoginComponent } from './login/login.component';
import { OperatorRoutingModule } from './operator-routing.module';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { UiModule } from './ui/ui.module';

@NgModule({
  imports: [
    OperatorRoutingModule,
    UiModule
  ],
  declarations: [OperatorComponent, LoginComponent, MainMenuComponent],
  exports: [OperatorComponent],
  providers: []
})
export class OperatorModule { }
