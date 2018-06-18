import { Component, Input } from '@angular/core';
import { Class } from '../class.enum';

@Component({
  selector: 'cdmClass',
  templateUrl: './class.component.html'
})
export class CdmClassComponent {

  @Input()
  value: Class;

}
