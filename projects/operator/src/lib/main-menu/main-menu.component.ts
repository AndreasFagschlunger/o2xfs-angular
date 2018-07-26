import { Component, OnInit } from '@angular/core';

import { MainMenuService } from './main-menu.service';

@Component({
    templateUrl: './main-menu.component.html',
    styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

    constructor(private mainMenu: MainMenuService) { }

    ngOnInit(): void {
        this.mainMenu.refresh();
    }
}
