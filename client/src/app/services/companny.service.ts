import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';
import { environment } from 'environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    private serverURL = environment.API_URL;
    private URL = `http://${this.serverURL}:3000/api/enterprises`;

    constructor(private http: HttpClient) { }

    getFamilies() {
        return this.http.get<[Companny]>(this.URL)
    }
}
