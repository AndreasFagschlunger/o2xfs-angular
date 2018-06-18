import { Directive, Input, ElementRef } from '@angular/core';
import { Level } from '../level.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmLevel]'
})
export class CdmLevelDirective extends AbstractOutcomeDirective {

  @Input('cdmLevel')
  value: Level;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Level.LEVEL_1:
      case Level.LEVEL_2:
      case Level.LEVEL_3:
      case Level.LEVEL_4:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



