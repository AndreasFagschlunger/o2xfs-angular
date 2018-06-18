import { Component, Input } from '@angular/core';
import { PresentState } from '../present-state.enum';

@Component({
  selector: 'cdmPresentState',
  templateUrl: './present-state.component.html'
})
export class CdmPresentStateComponent {

  @Input()
  value: PresentState;

}
