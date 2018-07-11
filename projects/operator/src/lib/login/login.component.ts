import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login().subscribe(() => {
      let redirect = '/operator/login' === this.authService.redirectUrl ? '/operator' : this.authService.redirectUrl;
      this.router.navigate([redirect]);
    });
  }
}
