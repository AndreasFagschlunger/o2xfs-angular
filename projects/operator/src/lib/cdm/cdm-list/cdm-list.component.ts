import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogicalService, ServiceClass, XfsManager } from 'xfs';
import { MainMenuService } from '../../main-menu/main-menu.service';
import { MenuItem } from '../../menu/menu-item.model';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'cdm-list',
  templateUrl: './cdm-list.component.html'
})
export class CdmListComponent implements OnInit {

  cashDispensers: LogicalService[];

  constructor(private mainMenu: MainMenuService, private menuService: MenuService, private router: Router, private xfsManager: XfsManager) { }

  ngOnInit() {
    this.cashDispensers = this.xfsManager.getLogicalServices().filter(e => ServiceClass.CDM === e.serviceClass);
    let items: MenuItem[] = [];
    for (let each of this.cashDispensers) {
      items.push({ items: [], label: each.name, onAction: () => this.select(each.name) });
    }
    this.menuService.setItems(items);
  }

  private select(logicalName: string): void {
    this.menuService.reset();
    this.router.navigate([this.mainMenu.redirectUrl], { queryParams: { logicalName: logicalName } });
  }
}
