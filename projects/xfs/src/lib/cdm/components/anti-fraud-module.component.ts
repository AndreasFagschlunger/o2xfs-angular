import { Component, Input } from '@angular/core';
import { AntiFraudModule } from '../anti-fraud-module.enum';

@Component({
  selector: 'cdmAntiFraudModule',
  templateUrl: './anti-fraud-module.component.html'
})
export class CdmAntiFraudModuleComponent {

  @Input()
  value: AntiFraudModule;

}
