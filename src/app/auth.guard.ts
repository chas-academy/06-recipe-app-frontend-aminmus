import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, Observer } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userService: UserService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return new Observable<boolean>((observer: Observer<boolean>) => {
      this.userService.isLoggedIn.subscribe(async (isloggedIn) => {
        if (isloggedIn) {
          const tokenIsValid = await this.userService.checkAuth();
          if (tokenIsValid) {
            observer.next(true);
            observer.complete();
          } else {
            this.userService.logout();
            observer.next(false);
            console.log('Session invalidated, logged out');
            observer.complete();
          }
        } else {
          observer.next(false);
          observer.complete();
        }
      });
    });
  }

}
