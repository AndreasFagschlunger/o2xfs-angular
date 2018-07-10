import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivate: route=' + route + ',state=' + state);
    let result: boolean = true;
    if(!this.authService.isLoggedIn && '/operator/login' !== state.url) {
      this.router.navigate(['/operator/login']);
      result = false;
    }
    return result;
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('canActivateChild: route=' + route + ',state=' + state);
    return false;
  }
}
