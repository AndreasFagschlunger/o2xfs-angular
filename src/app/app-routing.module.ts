import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'operator',
    loadChildren: 'operator/operator.module#OperatorModule'
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