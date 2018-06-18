import { Component, Input } from '@angular/core';
import { SafeDoor } from '../safe-door.enum';

@Component({
  selector: 'cdmSafeDoor',
  templateUrl: './safe-door.component.html'
})
export class CdmSafeDoorComponent {

  @Input()
  value: SafeDoor;

}
