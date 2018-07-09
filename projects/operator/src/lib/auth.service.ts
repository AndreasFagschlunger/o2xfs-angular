import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = false;

  constructor() { }

  login(): Observable<boolean> {
    this.isLoggedIn = true;
    return of(true);
  }
}
