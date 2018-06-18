import { Component, Input } from '@angular/core';
import { JammedShutterPosition } from '../jammed-shutter-position.enum';

@Component({
  selector: 'cdmJammedShutterPosition',
  templateUrl: './jammed-shutter-position.component.html'
})
export class CdmJammedShutterPositionComponent {

  @Input()
  value: JammedShutterPosition;

}
