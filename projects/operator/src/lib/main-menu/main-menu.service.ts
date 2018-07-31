import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { MenuButton } from '../menu/menu-button.class';
import { MenuService } from '../menu/menu.service';
import { MenuItem } from '../menu/menu-item.model';

@Injectable({
    providedIn: 'root'
})
export class MainMenuService {

    private items: MenuItem[];
    private selection: number[] = new Array();
    private page: number = 0;
    redirectUrl: string;

    constructor(private menuService: MenuService, private router: Router) {
        this.items = [
            { items: [], label: 'Status' },
            {
                label: 'Hardware', items: [
                    { label: 'Printer and Scanning', items: [] },
                    { label: 'Identification Card', items: [] },
                    {
                        label: 'Cash Dispenser', items: [
                            { label: 'Status', items: [], onAction: () => this.navigate(['/operator/cdm/status']) },
                            { label: 'Dispense cash', items: [], onAction: () => this.navigate(['/operator/cdm/dispense']) },
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

    private navigate(commands: any[], extras?: NavigationExtras): void {
        this.selection = this.menuService.getSelection();
        this.page = this.menuService.getPage();
        this.menuService.reset();
        this.router.navigate(commands, extras);
    }

    show(): void {
        this.menuService.setItems(this.items);
        this.menuService.setSelection(this.selection);
        this.menuService.setPage(this.page);
    }

    showBackButton(): void {
        this.menuService.setBackAction(() => this.router.navigate(['/operator']));
    }
}