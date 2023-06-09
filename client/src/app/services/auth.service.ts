import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private URL = 'http://localhost:3000/api/auth'

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

  getIds(){    
    const url = this.URL+'/userIdsByToken';
    console.log(url)
    return this.http.get<any>(url)
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/pages/login']);
  }
}
