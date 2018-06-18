import { Component, Input } from '@angular/core';
import { RetractArea } from '../retract-area.enum';

@Component({
  selector: 'cdmRetractArea',
  templateUrl: './retract-area.component.html'
})
export class CdmRetractAreaComponent {

  @Input()
  value: RetractArea;

}
