import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router){}

  canActivate(): boolean {
    let isAdmin = false;

    this.authService.isAdminByToken().subscribe(
      res => {
        isAdmin = res
      },
      err => {
        console.log(err.status)
        this.authService.getSessionBehavior(err.status)
      }
    )
    return isAdmin;
  }
  
}
