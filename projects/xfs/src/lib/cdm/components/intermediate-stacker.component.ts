import { Component, Input } from '@angular/core';
import { IntermediateStacker } from '../intermediate-stacker.enum';

@Component({
  selector: 'cdmIntermediateStacker',
  templateUrl: './intermediate-stacker.component.html'
})
export class CdmIntermediateStackerComponent {

  @Input()
  value: IntermediateStacker;

}
