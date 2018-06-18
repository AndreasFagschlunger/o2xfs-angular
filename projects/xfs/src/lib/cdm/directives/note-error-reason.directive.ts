import { Directive, Input, ElementRef } from '@angular/core';
import { NoteErrorReason } from '../note-error-reason.enum';
import { AbstractOutcomeDirective } from '../../directives/abstract-outcome.directive';
import { Outcome } from '../../directives/outcome.enum';

@Directive({
  selector: '[cdmNoteErrorReason]'
})
export class CdmNoteErrorReasonDirective extends AbstractOutcomeDirective {

  @Input('cdmNoteErrorReason')
  value: NoteErrorReason;

  constructor(el: ElementRef) {
    super(el);
  }

  getOutcome(): Outcome {
    let result: Outcome;
    switch (this.value) {
      case NoteErrorReason.DOUBLENOTEDETECTED:
      case NoteErrorReason.LONGNOTEDETECTED:
      case NoteErrorReason.SKEWEDNOTE:
      case NoteErrorReason.INCORRECTCOUNT:
      case NoteErrorReason.NOTESTOOCLOSE:
      case NoteErrorReason.OTHERNOTEERROR:
      case NoteErrorReason.SHORTNOTEDETECTED:
      default:
        result = Outcome.ERROR;
        break;
    }
    return result;
  }
}



