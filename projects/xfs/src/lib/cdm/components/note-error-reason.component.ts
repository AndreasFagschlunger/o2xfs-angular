import { Component, Input } from '@angular/core';
import { NoteErrorReason } from '../note-error-reason.enum';

@Component({
  selector: 'cdmNoteErrorReason',
  templateUrl: './note-error-reason.component.html'
})
export class CdmNoteErrorReasonComponent {

  @Input()
  value: NoteErrorReason;

}