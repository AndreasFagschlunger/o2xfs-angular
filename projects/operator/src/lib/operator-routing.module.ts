import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OperatorComponent } from './operator.component';
import { CdmModule } from './cdm/cdm.module';

export function loadCdmModule() {
    return CdmModule;
}

const routes: Routes = [
    {
        path: '',
        component: OperatorComponent,
        children: [
            { path: 'cdm', loadChildren: loadCdmModule },
            { path: 'login', component: LoginComponent },
            { path: '**', redirectTo: 'login' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OperatorRoutingModule {

}