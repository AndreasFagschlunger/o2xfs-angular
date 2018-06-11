import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { CdmDeviceState } from '../cdm-device-state.enum';

enum Alert {
  ERROR = 'alert-danger',
  WARNING = 'alert-warning',
  SUCCESS = 'alert-success',
}

@Directive({
  selector: '[cdmDeviceState]'
})
export class CdmDeviceStateDirective implements OnInit {

  @Input('cdmDeviceState')
  deviceState: CdmDeviceState;

  constructor(private el: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(): void {
    console.log(this.deviceState + ",typeof=" + (typeof this.deviceState))
    switch (this.deviceState) {
      case CdmDeviceState.ONLINE:
        this.toggleAlert(Alert.SUCCESS);
      break;
      case CdmDeviceState.OFFLINE:
      case CdmDeviceState.POWEROFF:
      case CdmDeviceState.NODEVICE:
      case CdmDeviceState.HWERROR:
      case CdmDeviceState.FRAUDATTEMPT:
      this.toggleAlert(Alert.ERROR);
      break;
      default:
      this.toggleAlert(Alert.WARNING);
      break;
    }
  }

  private toggleAlert(value: Alert) {
    for(let each of Object.keys(Alert)) {
      if(Alert[each] === value) {
        this.el.nativeElement.classList.add(value);
      } else {
        this.el.nativeElement.classList.remove(Alert[each]);
      }
    }
  }
}
