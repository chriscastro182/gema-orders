import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Family } from 'app/Models/Family.model';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamiliesService {

  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/families/`;

  constructor(private http: HttpClient) { }


  getFamilies(){
    return this.http.get<Family[]>(this.URL);
  }
}
