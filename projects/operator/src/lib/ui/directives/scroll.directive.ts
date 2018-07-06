import { Directive, ElementRef, OnInit, AfterContentChecked, AfterContentInit, asNativeElements } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { MenuButton } from '../../menu/menu-button.class';

@Directive({
  selector: '[o2-scroll]'
})
export class ScrollDirective implements AfterContentInit {

  private upButton: MenuButton;
  private downButton: MenuButton;
  private unitIncrement: number = 0;
  private value: number = 0;
  private max: number = 0;

  constructor(private el: ElementRef, private menuService: MenuService) {
    this.upButton = this.menuService.getUpButton();
    this.downButton = this.menuService.getDownButton();
  }

  ngAfterContentInit(): void {
    if(this.el.nativeElement.offsetHeight > window.innerHeight) {
      this.enable();
    } else {
      this.disable();
    }
  }

  private enable(): void {    
    this.unitIncrement = Math.round(window.innerHeight * 0.3);
    this.max = window.innerHeight - this.el.nativeElement.offsetHeight;
    this.upButton.onAction = () => this.scrollUp();
    this.downButton.onAction = () => this.scrollDown();
    this.upButton.visible = true;
    this.downButton.visible = true;
    if(this.value == 0) {
      this.upButton.disabled = true;
    }
  }

  private disable(): void {
    this.upButton.visible = false;
    this.downButton.visible = false;
  }

  private scrollUp(): void {
    this.value += this.unitIncrement;
    this.downButton.disabled = false;
    if(this.value > 0) {
      this.value = 0;
      this.upButton.disabled = true;
    }
    this.el.nativeElement.style.marginTop = this.value + 'px';
  }

  private scrollDown(): void {
    this.value -= this.unitIncrement;
    this.upButton.disabled = false;
    if(this.value <= this.max) {
      this.value = this.max;
      this.downButton.disabled = true;
    }
    this.el.nativeElement.style.marginTop = this.value + 'px';
  }
}
