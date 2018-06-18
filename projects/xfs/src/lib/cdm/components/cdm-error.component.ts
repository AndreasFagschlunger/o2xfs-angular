import { Component, Input } from '@angular/core';
import { CdmError } from '../cdm-error.enum';

@Component({
  selector: 'cdmCdmError',
  templateUrl: './cdm-error.component.html'
})
export class CdmCdmErrorComponent {

  @Input()
  value: CdmError;

}
