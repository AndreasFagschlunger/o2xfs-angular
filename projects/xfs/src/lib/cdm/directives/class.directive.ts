import { Directive, Input, ElementRef } from '@angular/core';
import { Class } from '../class.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmClass]'
})
export class CdmClassDirective extends AbstractOutcomeDirective {

  @Input('cdmClass')
  value: Class;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case Class.WFS_SERVICE_CLASS_NAME_CDM:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



