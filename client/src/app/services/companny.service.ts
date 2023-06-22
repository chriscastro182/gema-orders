import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Companny } from 'app/Models/Companny.model';

@Injectable({
    providedIn: 'root'
})
export class CompaniesService {

    private URL = 'http://localhost:3000/api/enterprises/'

    constructor(private http: HttpClient) { }

    getFamilies() {
        return this.http.get<[Companny]>(this.URL)
    }
}
