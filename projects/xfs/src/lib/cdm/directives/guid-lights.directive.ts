import { Directive, Input, ElementRef, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { CdmGuidLights } from '../cdm-guid-lights.enum';

const colorsMap = new Map<CdmGuidLights, string>([
  [CdmGuidLights.RED, 'red'],
  [CdmGuidLights.GREEN, 'green'],
  [CdmGuidLights.YELLOW, 'yellow'],
  [CdmGuidLights.BLUE, 'blue'],
  [CdmGuidLights.CYAN, 'cyan'],
  [CdmGuidLights.MAGENTA, 'magenta'],
  [CdmGuidLights.WHITE, 'white'],
]);

const intervalMap = new Map<CdmGuidLights, number>([
  [CdmGuidLights.SLOW_FLASH, 1000],
  [CdmGuidLights.MEDIUM_FLASH, 500],
  [CdmGuidLights.QUICK_FLASH, 250],
  [CdmGuidLights.CONTINUOUS, 0],
]);

@Directive({
  selector: '[cdmGuidLights]'
})
export class CdmGuidLightsDirective implements OnChanges, OnInit {

  @Input('cdmGuidLights')
  values: CdmGuidLights[];

  private intervalID: number = 0;
  private delay: number = 0;
  private className: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  private update(): void {
    for (let each of this.values) {
      if (CdmGuidLights.OFF === each) {
        this.turnOff();
      } else if (colorsMap.has(each) && this.className !== colorsMap.get(each)) {
        if (this.className.length > 0) {
          this.el.nativeElement.classList.remove(this.className);
        }
        this.className = colorsMap.get(each)!;
        this.setClass();
      } else if (intervalMap.has(each) && this.delay !== intervalMap.get(each)) {
        window.clearInterval(this.intervalID);
        this.delay = intervalMap.get(each)!;
        if (CdmGuidLights.CONTINUOUS === each) {
          this.setClass();
        } else {
          this.intervalID = window.setInterval(() => this.toggleClass(), this.delay);
        }
      }
    }
  }

  private toggleClass(): void {
    this.el.nativeElement.classList.toggle(this.className);
  }

  private setClass(): void {
    this.el.nativeElement.classList.add(this.className);
  }

  private turnOff(): void {
    if (this.intervalID) {
      window.clearInterval(this.intervalID);
    }
    this.el.nativeElement.classList.remove(this.className);
    this.className = '';
  }
}



