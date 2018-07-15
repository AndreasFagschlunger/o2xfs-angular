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

    public getButtons(): MenuButton[] {
        return this.buttons;
    }

    getBackButtonIndex(): number {
        return 3;
    }

    getNextButtonIndex(): number {
        return 7;
    }

    getNextPageButtonIndex(): number {
        return 7;
    }

    getPreviousPageButtonIndex(): number {
        return 6;
    }

    getButton(index: number): MenuButton {
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