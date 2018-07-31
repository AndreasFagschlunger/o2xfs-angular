import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot, Router } from '@angular/router';
import { MainMenuService } from '../main-menu/main-menu.service';
import { ServiceClass, XfsService } from 'xfs';
import { Statement } from '@angular/compiler';

@Injectable()
export class CdmGuard implements CanActivateChild {

    constructor(private menuService: MainMenuService, private xfsService: XfsService, private router: Router) { }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let logicalName = childRoute.queryParams['logicalName'];
        let result: boolean = logicalName != null || state.url === '/operator/cdm/select';        
        console.log('result=' + result + ',logicalName=' + logicalName + ',state.url=' + state.url);
        if (!result) {
            let cashDispensers = this.xfsService.getLogicalServices().filter(e => ServiceClass.CDM === e.serviceClass);
            if (cashDispensers.length == 1) {
                this.router.navigate([state.url, { logicalName: cashDispensers[0].name }]);
            } else {
                this.menuService.redirectUrl = state.url;
                this.router.navigate(['/operator/cdm/select']);
            }
        }
        return result;
    }
}