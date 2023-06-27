import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technician } from 'app/Models/Technician.model';

@Injectable({
  providedIn: 'root'
})
export class TechniciansService {

  private URL = 'http://localhost:3000/api/technicians'
  constructor(private http: HttpClient) { }

  getTechnicians()
  {
    return this.http.get<[Technician]>(this.URL)
  }
  getTechnicianByUserId(){

    const url = this.URL+"/getTechnicianByUserId/" + localStorage.getItem('userId');
    
    return this.http.get<Technician>(url)
  }
}
