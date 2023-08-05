import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  
  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/catalogs`;

  constructor(private http: HttpClient) { }


  getOrdersCatalogs(){
    return this.http.get<any>(this.URL+"/getOrdersCatalog/");
  }
}
