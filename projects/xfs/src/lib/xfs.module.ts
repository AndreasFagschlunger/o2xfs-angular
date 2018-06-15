import { NgModule } from '@angular/core';
import { XfsComponent } from './xfs.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [XfsComponent],
  exports: [XfsComponent]
})
export class XfsModule { }
