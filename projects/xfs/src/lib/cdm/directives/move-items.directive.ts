import { Directive, Input, ElementRef } from '@angular/core';
import { MoveItems } from '../move-items.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmMoveItems]'
})
export class CdmMoveItemsDirective extends AbstractOutcomeDirective {

  @Input('cdmMoveItems')
  value: MoveItems;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case MoveItems.FROMCU:
      case MoveItems.TOCU:
      case MoveItems.TOTRANSPORT:
      case MoveItems.TOSTACKER:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



