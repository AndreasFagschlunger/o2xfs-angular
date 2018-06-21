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
  private backgroundColor: string = '';

  constructor(private el: ElementRef) { }

  ngOnInit(): void {
    this.update();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.update();
  }

  private update(): void {
    for(let each of this.values) {
      console.log('update(): each=' + each)
      if(CdmGuidLights.OFF === each) {
        this.turnOff();
      } else if(colorsMap.has(each)) {
        this.backgroundColor = colorsMap.get(each)!;
        this.setColor();
      } else if(intervalMap.has(each) && this.delay !== intervalMap.get(each)) {
        console.log('this.intervalID=' + this.intervalID + ',delay' + this.delay + ',' + intervalMap.get(each));
        window.clearInterval(this.intervalID);
        this.delay = intervalMap.get(each)!;
        if(CdmGuidLights.CONTINUOUS === each) {
          this.setColor();
        } else {
          this.intervalID = window.setInterval(() => this.toggleColor(), this.delay);
        }
      } else {
        console.log('WARN: ' + each + ',' + intervalMap.has(each) + ',this.delay=' + this.delay + ',in=' + intervalMap.get(each));
      }
    }
  }

  private toggleColor(): void {
    console.log('toggleColor: backgroundColor=' + this.backgroundColor + ',' + this.el.nativeElement.style.backgroundColor);
    if(this.backgroundColor === this.el.nativeElement.style.backgroundColor) {
      this.el.nativeElement.style.backgroundColor = '';
    } else {
      this.setColor();
    }
  }

  private setColor(): void {
    this.el.nativeElement.style.backgroundColor = this.backgroundColor;
  }

  private turnOff(): void {
    this.backgroundColor = '';
    this.setColor();
    if(this.intervalID) {
      window.clearInterval(this.intervalID);
    }
  }
}



