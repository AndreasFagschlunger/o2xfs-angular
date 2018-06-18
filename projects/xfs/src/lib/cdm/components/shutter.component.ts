import { Component, Input } from '@angular/core';
import { Shutter } from '../shutter.enum';

@Component({
  selector: 'cdmShutter',
  templateUrl: './shutter.component.html'
})
export class CdmShutterComponent {

  @Input()
  value: Shutter;

}
