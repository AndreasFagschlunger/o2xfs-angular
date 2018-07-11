import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { MenuItem } from './menu-item.model';
import { MenuService } from '../menu/menu.service';

@Component({
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  private items: MenuItem[];

  constructor(private menuService: MenuService, private router: Router) {
      this.items = [
          { items: [], label: 'Status' },
          {
              label: 'Hardware', items: [
                  { label: 'Card reader', items: [] },
                  { label: 'Encrypting pin pad', items: [] },
                  {
                      label: 'Cash dispenser', items: [
                          { label: 'Dispense cash', items: [], onAction: () => router.navigate(['/cdm/dispense']) },
                      ]
                  },
                  { label: 'Cash recycler', items: [] },
                  { label: 'Document printer', items: [] },
                  { label: 'Scanner', items: [] },
                  { label: 'Sensors and Indicators', items: [] },
              ]
          }
      ];
  }

  ngOnInit(): void {
      for(let i = 0; i < this.items.length; i++) {
          let button = this.menuService.getButton(i);
          button.text = this.items[i].label;
          button.visible = true;
      }
  }
}
