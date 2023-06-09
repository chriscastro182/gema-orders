import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/User.model';



@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private URL = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<[User]>(this.URL)
  }
}
