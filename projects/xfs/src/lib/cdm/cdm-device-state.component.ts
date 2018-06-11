import { Component, OnInit, Input } from '@angular/core';
import { CdmDeviceState } from '.';

@Component({
  selector: 'cdmDeviceState',
  templateUrl: './cdm-device-state.component.html'
})
export class CdmDeviceStateComponent implements OnInit {

  @Input()
  value: CdmDeviceState;

  ngOnInit(): void {
    console.log('ngOnInit: value=' + this.value + ',typeof=' + (typeof this.value));
  }
}
