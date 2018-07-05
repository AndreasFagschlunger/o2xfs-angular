import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { MenuButton } from '../../menu/menu-button.class';

@Component({
  selector: 'o2-menu-button',
  templateUrl: './menu-button.component.html',
  styleUrls: ['./menu-button.component.scss']
})
export class MenuButtonComponent implements OnInit {

  @Input()
  index: number;

  button: MenuButton;

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.button = this.menuService.getButton(this.index);
  }
}
