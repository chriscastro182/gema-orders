import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/auth`;

  constructor(private http: HttpClient, private router: Router) { }

  signIn(user){
    return this.http.post<any>(this.URL+'/signin', user)
  }

  loggedIn(): Boolean{
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserId(){
    return localStorage.getItem('userId');
  }
  getUserName(){
    return localStorage.getItem('username').toLocaleUpperCase();
  }

  getIds(){    
    const url = this.URL+'/userIdsByToken';
    //console.log(url)
    return this.http.get<any>(url)
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
  }
  getSessionBehavior(err: number){
    if (err === 401) {
      this.logout()
    }
    if (err==500){
      this.router.navigate(['/']);
    }
  }

  isAdminByToken(){    
    const url = this.URL+'/isAdminByToken';
    //console.log(url)    
    return this.http.get<any>(url)
  }
}
