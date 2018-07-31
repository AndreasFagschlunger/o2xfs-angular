import { Injectable } from '@angular/core';
import { MenuButton } from './menu-button.class';
import { MenuItem } from './menu-item.model';

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

    private items: MenuItem[];
    private selection: number[] = new Array();
    private page: number = 0;
    private backAction?: () => void;

    private refresh(): void {
        let selected = this.getSelected();
        console.log('selected=' + selected + ',selection=' + this.selection);
        if (selected) {
            this.show(selected.items);
        } else {
            this.show(this.items);
        }
    }

    private show(items: MenuItem[]) {
        let itemsPerPage = this.buttons.length;
        let pageCount = 0;
        let itemOffset = 0;
        if (this.selection.length > 0) {
            itemsPerPage--;
            this.backAction = () => this.back();
        }
        if (items.length > itemsPerPage) {
            itemsPerPage -= 2;
            pageCount = Math.ceil(items.length / itemsPerPage);
            itemOffset = this.page * itemsPerPage;
        }
        console.log('pageCount=' + pageCount + ',itemOffset=' + itemOffset);
        for (let i = 0, itemIndex = itemOffset; i < this.buttons.length; i++) {
            let button: MenuButton = this.buttons[i];
            if (this.backAction && i == this.getBackButtonIndex()) {
                button.text = 'Back';
                button.visible = true;
                button.disabled = false;
                button.onAction = this.backAction;
            } else if (i == this.getPreviousPageButtonIndex() && pageCount > 0) {
                button.text = 'Previous Page';
                button.visible = true;
                button.disabled = this.page == 0;
                button.onAction = () => this.previousPage();
            } else if (i == this.getNextPageButtonIndex() && pageCount > 0) {
                button.text = 'Next Page';
                button.visible = true;
                button.disabled = this.page == (pageCount - 1);
                button.onAction = () => this.nextPage();
            } else if (itemIndex < items.length) {
                let item: MenuItem = items[itemIndex++];
                console.log(itemIndex + ',' + item.label);
                button.text = item.label;
                button.visible = true;
                button.disabled = false;
                button.onAction = () => this.select(itemIndex - 1);
            } else {
                button.visible = false;
                button.disabled = true;
            }
        }
    }

    private nextPage(): void {
        this.page++;
        this.refresh();
    }

    private previousPage(): void {
        this.page--;
        this.refresh();
    }

    private back(): void {
        this.page = 0;
        this.selection.pop();        
        this.refresh();
    }

    private select(itemIndex: number): void {        
        this.page = 0;
        this.selection.push(itemIndex);
        let item = this.getSelected();
        if(item) {
            if(item.items.length > 0) {
                this.refresh();
            } else {
                this.selection.pop();
                item.onAction!();
            }
        }        
    }

    private getSelected(): MenuItem | undefined {
        let result;
        if (this.selection.length > 0) {
            for (let i = 0; i < this.selection.length; i++) {
                if (i == 0) {
                    result = this.items[this.selection[i]];
                } else {
                    result = result.items[this.selection[i]];
                }
            }
        }
        return result;
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

    reset(): void {
        this.items = [];
        this.selection = [];
        this.page = 0;
        this.backAction = undefined;
        for(let each of this.buttons) {
            each.disabled = true;
            each.onAction = undefined;
            each.text = '';
            each.visible = false;
        }
    }

    setItems(items: MenuItem[]): void {
        this.items = items;
        this.refresh();
    }

    setBackAction(backAction: () => void): void {
        this.backAction = backAction;
        this.refresh();
    }

    setSelection(selection: number[]): void {
        this.selection = selection;
        this.refresh();
    }

    getSelection(): number[] {
        return this.selection;
    }

    setPage(page: number) {
        this.page = page;
        this.refresh();
    }

    getPage(): number {
        return this.page;
    }
}