import { Component, Input } from '@angular/core';
import { ItemInfoType } from '../item-info-type.enum';

@Component({
  selector: 'cdmItemInfoType',
  templateUrl: './item-info-type.component.html'
})
export class CdmItemInfoTypeComponent {

  @Input()
  value: ItemInfoType;

}
