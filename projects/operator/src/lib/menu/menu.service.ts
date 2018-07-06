import { Injectable } from '@angular/core';
import { MenuButton } from './menu-button.class';

@Injectable({
    providedIn: 'root'
})
export class MenuService {

    private buttons: MenuButton[] = [
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
        new MenuButton(),
    ];


    getButton(index: number) {
        return this.buttons[index];
    }

    getUpButton(): MenuButton {
        let result = this.getButton(5);
        result.text = 'Up';
        return result;
    }

    getDownButton(): MenuButton {
        let result = this.getButton(6);
        result.text = 'Down';
        return result;
    }
}