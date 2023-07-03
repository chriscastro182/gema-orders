import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Technician } from 'app/Models/Technician.model';
import { Observable } from 'rxjs'
import { catchError } from 'rxjs/operators';


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

  createTechnician(technician: Technician): Observable<Technician> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(technician);
    return this.http.post<Technician>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  getTechnicianById(technicianId: string)
  {
    return this.http.get(this.URL + '/' + technicianId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  updateTechnicianById(technician: Technician): Observable<Technician> {
    const headers = { 'content-type': 'application/json' }
    const technicianId = technician._id;
    const body = JSON.stringify(technician);
    return this.http.put<Technician>(this.URL+ '/' + technicianId, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }

  deleteTechnicianById(technicianId: string)
  {
    return this.http.delete(this.URL + '/' + technicianId).pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
}
