import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogicalService, ServiceClass, XfsService } from 'xfs';
import { MenuItem, MenuService } from '../../menu/menu';

@Component({
  selector: 'cdm-list',
  templateUrl: './cdm-list.component.html',
  styleUrls: ['./cdm-list.component.scss']
})
export class CdmListComponent implements OnInit {

  cashDispensers: LogicalService[];

  constructor(private menuService: MenuService, private router: Router, private xfsService: XfsService) { }

  ngOnInit() {
    this.cashDispensers = this.xfsService.getLogicalServices().filter(e => ServiceClass.CDM === e.serviceClass);
    let items: MenuItem[] = [];
    for(let each of this.cashDispensers) {
      items.push({ items: [], label: each.name, onAction: () => this.router.navigate(['']) });
    }
    this.menuService.setItems(items);
  }
}
