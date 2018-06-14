import { ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Outcome } from '../directives/outcome.enum';

const STYLE_CLASSES: String[] = ['alert-success', 'alert-warning', 'alert-danger'];

export abstract class AbstractOutcomeDirective implements OnChanges {

    private el: ElementRef;

    constructor(el: ElementRef) {
        this.el = el;
    }

    abstract getOutcome(): Outcome;

    ngOnChanges(change: SimpleChanges) {
        this.update(this.getOutcome());
    }

    update(value: Outcome) {
        for (let each of Object.keys(Outcome)) {
            if(typeof Outcome[each] !== 'number') {
                continue;
            }
            if (Outcome[each] === value) {
                this.el.nativeElement.classList.add(STYLE_CLASSES[Outcome[each]]);
            } else {
                this.el.nativeElement.classList.remove(STYLE_CLASSES[Outcome[each]]);
            }
        }
    }
}