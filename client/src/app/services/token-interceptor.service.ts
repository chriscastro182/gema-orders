import { Injectable } from '@angular/core';
import { HttpInterceptor } from "@angular/common/http";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {
  
  constructor(private atuhService: AuthService) { }

  intercept(req, next):any {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: !this.atuhService.getToken() ? '': this.atuhService.getToken()
      }
    });
    
    return next.handle(tokenizeReq);
  }

}
