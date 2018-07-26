import { Component, OnInit, Input } from '@angular/core';
import { MainMenuService } from '../../main-menu/main-menu.service';

@Component({
  selector: 'o2-column-layout',
  templateUrl: './column-layout.component.html',
  styleUrls: ['./column-layout.component.scss']
})
export class ColumnLayoutComponent implements OnInit {

  @Input() backButton: boolean = false;

  constructor(private mainMenu: MainMenuService) { }

  ngOnInit() {
    if(this.backButton) {
      this.mainMenu.showBackButton();
    }
  }
}
