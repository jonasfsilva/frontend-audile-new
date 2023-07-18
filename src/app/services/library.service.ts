import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {
  headers = {
    "Content-Type": "application/json",
    "Authorization": "Token "
  };

  constructor(private http : HttpClient, private token_service : TokenService) { }

  makeHeaders() {
    let token = this.token_service.retrieveToken()

    let headers = {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    };
    return headers
  }

  sendConversion(data: any) {
    let headers = this.makeHeaders();
    console.log(headers)
    console.log('pelo servico')
    var base_url =  `${environment.apiUrl}/v1/library/operations/`
    this.http.post(`${base_url}`, data, {headers: new HttpHeaders(headers)})
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

  getConversions() {
    let headers = this.makeHeaders();
    var base_url =  `${environment.apiUrl}/v1/library/operations/`
    return this.http.get(`${base_url}`, {headers: new HttpHeaders(headers)})
  }

}
