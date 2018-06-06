import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { OperatorModule } from 'operator';

export function loadOperatorModule() {
  return OperatorModule;
}

const appRoutes: Routes = [
  {
    path: 'operator',
    // https://stackoverflow.com/questions/50497842/angular-cli-project-with-lazy-loading-route-configuration-in-library
    // loadChildren: './operator/operator.module#OperatorModule'
    loadChildren: loadOperatorModule
  },
  { path: '', redirectTo: '/operator', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}