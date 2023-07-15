import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  headers = {
    "Content-Type": "application/json"
  };

  constructor(private http : HttpClient) { }


  sendContact(data: any) {
    console.log('pelo servico')
    var base_url =  `${environment.apiUrl}/v1/configurations/contacts/`
    this.http.post(`${base_url}`, data, {headers: new HttpHeaders(this.headers)})
      .subscribe(
        {
          next: (response: any) => {
            console.log(response)
            return response
          },
          error: (err: any) => {
            return err
          },
          complete() {
            console.log('fim')
          },
        }
      )
  }

  getVoices() {
    var base_url =  `${environment.apiUrl}/v1/configurations/voices/`
    return this.http.get(`${base_url}`, {headers: new HttpHeaders(this.headers)})
  }
}
