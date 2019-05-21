import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(private authService: AuthService, private router: Router) { }
  canActivate() {
    let isLoggedIn = this.authService.isLoggedInObs();
    isLoggedIn.subscribe((loggedin) => {
      if (!loggedin) {
        this.router.navigate(['unauthorized']);
      }
    });
    return isLoggedIn;

  }
}
