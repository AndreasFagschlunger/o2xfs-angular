import { Component, Input } from '@angular/core';
import { Dispenser } from '../dispenser.enum';

@Component({
  selector: 'cdmDispenser',
  templateUrl: './dispenser.component.html'
})
export class CdmDispenserComponent {

  @Input()
  value: Dispenser;

}
