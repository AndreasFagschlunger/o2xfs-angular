import { Component, Input } from '@angular/core';
import { Position } from '../position.enum';

@Component({
  selector: 'cdmPosition',
  templateUrl: './position.component.html'
})
export class CdmPositionComponent {

  @Input()
  value: Position;

}
