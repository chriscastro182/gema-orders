import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from 'app/Models/Order.model';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private URL = 'http://localhost:3000/api/orders';

  constructor(private http: HttpClient) { }

  getOrdersById(id:string)
  {
    
    return this.http.get<[Order]>(this.URL+"/ordersBytechnician/"+id);

  }
}
