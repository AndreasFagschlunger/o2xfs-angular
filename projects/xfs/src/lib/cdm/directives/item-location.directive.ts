import { Directive, Input, ElementRef } from '@angular/core';
import { ItemLocation } from '../item-location.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmItemLocation]'
})
export class CdmItemLocationDirective extends AbstractOutcomeDirective {

  @Input('cdmItemLocation')
  value: ItemLocation;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case ItemLocation.DEVICE:
      case ItemLocation.CASHUNIT:
      case ItemLocation.CUSTOMER:
      case ItemLocation.UNKNOWN:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



