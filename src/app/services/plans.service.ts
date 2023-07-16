import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlansService {
  headers = {
    "Content-Type": "application/json"
  };

  constructor(private http : HttpClient) { }

  getPlans() {
    var base_url =  `${environment.apiUrl}/v1/plans/plans/`
    return this.http.get(`${base_url}`)
  }
}
