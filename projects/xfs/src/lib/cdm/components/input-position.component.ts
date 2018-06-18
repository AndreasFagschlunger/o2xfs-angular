import { Component, Input } from '@angular/core';
import { InputPosition } from '../input-position.enum';

@Component({
  selector: 'cdmInputPosition',
  templateUrl: './input-position.component.html'
})
export class CdmInputPositionComponent {

  @Input()
  value: InputPosition;

}
