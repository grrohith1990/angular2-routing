import {
  CanActivate,
  Router,
  CanActivateChild,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AuthService } from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild {

  constructor(private authService:AuthService,private route:Router) {}
  canActivate(route: ActivatedRouteSnapshot,state: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated().then((authenticated: boolean)=> {
      if(authenticated) {
        return true;
      } else {
        this.route.navigate(['/']);
      }
    })
  }

  canActivateChild(route: ActivatedRouteSnapshot,state: RouterStateSnapshot ) : Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(route,state);
  }
}
