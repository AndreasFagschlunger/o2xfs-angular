import { Directive, Input, ElementRef } from '@angular/core';
import { ItemInfoType } from '../item-info-type.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmItemInfoType]'
})
export class CdmItemInfoTypeDirective extends AbstractOutcomeDirective {

  @Input('cdmItemInfoType')
  value: ItemInfoType;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case ItemInfoType.SERIALNUMBER:
      case ItemInfoType.SIGNATURE:
      case ItemInfoType.IMAGEFILE:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



