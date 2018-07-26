import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { MenuButton } from '../menu/menu-button.class';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from './menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class MainMenuService {

    private items: MenuItem[];
    private selection: number[] = new Array();
    private currentPage: number = 0;

    constructor(private menuService: MenuService, private router: Router) {
        this.items = [
            { items: [], label: 'Status' },
            {
                label: 'Hardware', items: [
                    { label: 'Printer and Scanning', items: [] },
                    { label: 'Identification Card', items: [] },
                    {
                        label: 'Cash Dispenser', items: [
                            { label: 'Status', items: [], onAction: () => router.navigate(['/operator/cdm/status']) },
                            { label: 'Dispense cash', items: [], onAction: () => router.navigate(['/operator/cdm/dispense']) },
                        ]
                    },
                    { label: 'PIN Keypad', items: [] },
                    { label: 'Check Reader/Scanner', items: [] },
                    { label: 'Depository', items: [] },
                    { label: 'Text Terminal Unit', items: [] },
                    { label: 'Sensors and Indicators', items: [] },
                    { label: 'Vendor Dependent Mode', items: [] },
                    { label: 'Camera', items: [] },
                    { label: 'Alarm', items: [] },
                    { label: 'Card Embossing Unit', items: [] },
                    { label: 'Cash-In Module', items: [] },
                    { label: 'Card Dispenser', items: [] },
                    { label: 'Barcode Reader', items: [] },
                    { label: 'Item Processing', items: [] },
                ]
            }
        ];
    }

    refresh(): void {
        let selected = this.getSelected();
        console.log('selected=' + selected + ',selection=' + this.selection);
        if (selected) {
            this.show(selected.items);
        } else {
            this.show(this.items);
        }
    }

    private show(items: MenuItem[]) {
        let buttons: MenuButton[] = this.menuService.getButtons();
        let itemsPerPage = buttons.length;
        let pageCount = 0;
        let itemOffset = 0;
        if (this.selection.length > 0) {
            itemsPerPage--;
        }
        if (items.length > itemsPerPage) {
            itemsPerPage -= 2;
            pageCount = Math.ceil(items.length / itemsPerPage);
            itemOffset = this.currentPage * itemsPerPage;
        }
        console.log('pageCount=' + pageCount + ',itemOffset=' + itemOffset);
        for (let i = 0, itemIndex = itemOffset; i < buttons.length; i++) {
            if (this.selection.length > 0 && i == this.menuService.getBackButtonIndex()) {
                buttons[i].text = 'Back';
                buttons[i].visible = true;
                buttons[i].disabled = false;
                buttons[i].onAction = () => this.back();
            } else if (i == this.menuService.getPreviousPageButtonIndex() && pageCount > 0) {
                buttons[i].text = 'Previous Page';
                buttons[i].visible = true;
                buttons[i].disabled = this.currentPage == 0;
                buttons[i].onAction = () => this.previousPage();
            } else if (i == this.menuService.getNextPageButtonIndex() && pageCount > 0) {
                buttons[i].text = 'Next Page';
                buttons[i].visible = true;
                buttons[i].disabled = this.currentPage == (pageCount - 1);
                buttons[i].onAction = () => this.nextPage();
            } else if (itemIndex < items.length) {
                let item: MenuItem = items[itemIndex++];
                console.log(itemIndex + ',' + item.label);
                buttons[i].text = item.label;
                buttons[i].visible = true;
                buttons[i].disabled = false;
                buttons[i].onAction = () => this.select(itemIndex - 1);
            } else {
                buttons[i].visible = false;
                buttons[i].disabled = true;
            }
        }
    }

    private nextPage(): void {
        this.currentPage++;
        this.refresh();
    }

    private previousPage(): void {
        this.currentPage--;
        this.refresh();
    }

    private back(): void {
        this.currentPage = 0;
        this.selection.pop();        
        this.refresh();
    }

    private select(itemIndex: number): void {        
        this.currentPage = 0;
        this.selection.push(itemIndex);
        let item = this.getSelected();
        if(item) {
            if(item.items.length > 0) {
                this.refresh();
            } else {
                this.selection.pop();
                this.menuService.reset();                
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

    showBackButton(): void {
        let button = this.menuService.getButtons()[this.menuService.getBackButtonIndex()];
        button.text = 'Back';
        button.disabled = false;
        button.visible = true;
        button.onAction = () => this.router.navigate(['/operator']);
    }
}