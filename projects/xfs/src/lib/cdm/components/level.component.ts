import { Component, Input } from '@angular/core';
import { Level } from '../level.enum';

@Component({
  selector: 'cdmLevel',
  templateUrl: './level.component.html'
})
export class CdmLevelComponent {

  @Input()
  value: Level;

}
