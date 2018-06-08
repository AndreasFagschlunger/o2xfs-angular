import { Directive, Input, ElementRef, Renderer2, OnInit } from '@angular/core';
import { CdmDeviceState } from './cdm-device-state.enum';
import { Level } from '.';

enum Alert {
  ERROR = 'xfs-error',
  WARNING = 'xfs-warning',
  SUCCESS = 'xfs-success',
}

@Directive({
  selector: '[cdmDeviceState]'
})
export class DeviceStateDirective implements OnInit {

  @Input('cdmDeviceState')
  deviceState: CdmDeviceState;

  constructor(private el: ElementRef, private _renderer: Renderer2) { }

  ngOnInit(): void {
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
        this._renderer.addClass(this.el.nativeElement, value);
      } else {
        this._renderer.removeClass(this.el.nativeElement, value);
      }
    }
  }
}
