import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Appliance } from 'app/Models/Appliance.model';
import { environment } from 'environments/environment';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppliancesService {

  private serverURL = environment.API_URL;
  private URL = `http://${this.serverURL}:3000/api/appliances`;

  constructor(private http: HttpClient, private router: Router) { }

  getAppliances(){
    return this.http.get<any>(this.URL+"/getAppliances/");
  }  
  createClient(appliance: Appliance): Observable<Appliance> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(appliance);

    return this.http.post<Appliance>(this.URL, body, { 'headers': headers })
    .pipe(
      catchError((err) => {
        console.error(err);
        throw err;
      })
    )
  }
}
