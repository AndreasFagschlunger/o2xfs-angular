import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuButtonComponent } from './menu-button/menu-button.component';
import { ScrollDirective } from './directives/scroll.directive';
import { ColumnLayoutComponent } from './column-layout/column-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ColumnLayoutComponent, MenuButtonComponent, ScrollDirective],
  exports: [ColumnLayoutComponent, MenuButtonComponent, ScrollDirective]
})
export class UiModule { }
