import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Client } from 'app/Models/Client.model';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  private URL = 'http://localhost:3000/api/clients'
  constructor(private http: HttpClient) { }

  getClients()
  {
    return this.http.get<[Client]>(this.URL)
  }
}
