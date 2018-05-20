import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperatorComponent } from './operator.component';
import { CashDispenserListComponent } from './cash-dispenser/cash-dispenser-list/cash-dispenser-list.component';


const routes: Routes = [
    {
        path: 'operator',
        component: OperatorComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: '', component: CashDispenserListComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperatorRoutingModule {

}