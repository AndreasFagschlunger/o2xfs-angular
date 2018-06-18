import { Component, Input } from '@angular/core';
import { ItemLocation } from '../item-location.enum';

@Component({
  selector: 'cdmItemLocation',
  templateUrl: './item-location.component.html'
})
export class CdmItemLocationComponent {

  @Input()
  value: ItemLocation;

}
