import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { AuthService } from 'src/services/auth/auth.service';
@Injectable({
  providedIn: 'root',
})
export class GuardGuard implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.auth.isAuthenticated()) {
      this.router.navigateByUrl('user/dashboard');
      return false;
    } else {
      return true;
    }
  }
}
