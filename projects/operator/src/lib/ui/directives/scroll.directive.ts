import { Directive, ElementRef, OnInit, AfterContentChecked, AfterContentInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { MenuButton } from '../../menu/menu-button.class';

@Directive({
  selector: '[o2-scroll]'
})
export class ScrollDirective implements AfterContentInit {

  private upButton: MenuButton;
  private downButton: MenuButton;
  private pos: number = 0;

  constructor(private el: ElementRef, private menuService: MenuService) {
    this.upButton = this.menuService.getUpButton();
    this.downButton = this.menuService.getDownButton();
  }

  ngAfterContentInit(): void {
    if(this.el.nativeElement.offsetHeight > window.innerHeight) {
      // this.el.nativeElement.style.marginTop = (window.innerHeight - this.el.nativeElement.offsetHeight) + 'px';
      this.enable();
    } else {
      this.disable();
    }
  }

  private enable(): void {
    console.log('window.innerHeight=' + window.innerHeight + ',nativeElement.offsetHeight=' + this.el.nativeElement.offsetHeight);
    this.upButton.onAction = () => this.scrollUp();
    this.downButton.onAction = () => this.scrollDown();
    if(this.pos == 0) {
      this.upButton.disable = true;
    }
  }

  private disable(): void {

  }

  private scrollUp(): void {

  }

  private scrollDown(): void {

  }
}
