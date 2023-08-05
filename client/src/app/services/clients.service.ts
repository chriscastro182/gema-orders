import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'app/Models/Client.model';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/clients`;

  constructor(private http: HttpClient) { }

  getClients() {
    return this.http.get<[Client]>(this.URL).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  createClient(client: Client): Observable<Client> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(client);

    return this.http.post<Client>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  getClientById(clientId: string)
  {
    return this.http.get(this.URL + '/' + clientId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  updateClient(client: Client): Observable<Client> {
    const headers = { 'content-type': 'application/json' }
    const clientId = client._id;
    const body = JSON.stringify(client);
    return this.http.put<Client>(this.URL+ '/' + clientId, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  deleteClientbyId(clientId: string)
  {
    return this.http.delete(this.URL + '/' + clientId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
}
