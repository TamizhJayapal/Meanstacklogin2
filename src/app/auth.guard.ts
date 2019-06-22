import { Injectable } from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import { AuthendicationService } from '../app/services/authendication.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authendicationService: AuthendicationService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const currentuser = this.authendicationService.currentUserValue();
    if (currentuser) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

}
