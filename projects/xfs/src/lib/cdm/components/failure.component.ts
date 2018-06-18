import { Component, Input } from '@angular/core';
import { Failure } from '../failure.enum';

@Component({
  selector: 'cdmFailure',
  templateUrl: './failure.component.html'
})
export class CdmFailureComponent {

  @Input()
  value: Failure;

}
