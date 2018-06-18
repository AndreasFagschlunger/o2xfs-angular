import { Component, Input } from '@angular/core';
import { MoveItems } from '../move-items.enum';

@Component({
  selector: 'cdmMoveItems',
  templateUrl: './move-items.component.html'
})
export class CdmMoveItemsComponent {

  @Input()
  value: MoveItems;

}
