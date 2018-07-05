import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollDirective } from './directives/scroll.directive';
import { ColumnLayoutComponent } from './column-layout/column-layout.component';
import { MenuButtonComponent } from './menu-button/menu-button.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ScrollDirective, ColumnLayoutComponent, MenuButtonComponent],
  exports: [ScrollDirective, ColumnLayoutComponent]
})
export class UiModule { }
