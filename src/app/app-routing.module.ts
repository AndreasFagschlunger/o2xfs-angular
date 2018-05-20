import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import { OperatorComponent } from 'operator';

const appRoutes: Routes = [
  { path: '**', redirectTo: '/operator' }
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