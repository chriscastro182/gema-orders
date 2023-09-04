import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(private authService: AuthService, private router: Router){}

  canActivate(): any {
    let isAdmin = false;

    this.authService.isAdminByToken().subscribe(
      res => {
        console.log(res)
        isAdmin = res
        return isAdmin;
      },
      err => {
        console.log(err.status)
        this.authService.getSessionBehavior(err.status)        
        this.router.navigate(['/pages/login']);
        return isAdmin;
      }
    )
    //console.log(isAdmin);
    setTimeout(() => {
      return false
    }, 1000);

  }
  
}
