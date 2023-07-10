import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  
  private URL = 'http://localhost:3000/api/catalogs';

  constructor(private http: HttpClient) { }


  getOrdersCatalogs(){
    return this.http.get<any>(this.URL+"/getOrdersCatalog/");
  }
}
