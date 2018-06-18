import { Component, Input } from '@angular/core';
import { OnBlacklist } from '../on-blacklist.enum';

@Component({
  selector: 'cdmOnBlacklist',
  templateUrl: './on-blacklist.component.html'
})
export class CdmOnBlacklistComponent {

  @Input()
  value: OnBlacklist;

}
