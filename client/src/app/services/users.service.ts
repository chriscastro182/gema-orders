import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'app/Models/User.model';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/users`;

  constructor(private http: HttpClient) { }

  getUsers(){
    return this.http.get<[User]>(this.URL)
  }

  createUser(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(user);
    return this.http.post<User>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    ) 
  }

  getUserById(userId: string)
  {
    return this.http.get(this.URL + '/' + userId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  updateUserById(user: User): Observable<User> {
    const headers = { 'content-type': 'application/json' }
    const userId = user._id;
    const body = JSON.stringify(user);
    return this.http.put<User>(this.URL+ '/' + userId, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  deleteTechnicianById(userId: string)
  {
    return this.http.delete(this.URL + '/' + userId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
}
