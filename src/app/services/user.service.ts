import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  headers = {
    "Content-Type": "application/json"
  };

  constructor(private http : HttpClient, private tokenService: TokenService) { }

  makeHeaders() {
    let token = this.tokenService.retrieveToken()

    let headers = {
      "Content-Type": "application/json",
      "Authorization": `Token ${token}`
    };
    return headers
  }

  login(data: any) {
    console.log('pelo servico')
    var base_url =  `${environment.apiUrl}/v1/auth/login/`
    this.http.post(`${base_url}`, data, {headers: new HttpHeaders(this.headers)})
      .subscribe(
        {
          next: (response: any) => {
            console.log(response)
            this.tokenService.store(response)
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

  logout() {
    this.tokenService.delete();
  }
  
  signUp(data: any) {
    var base_url =  `${environment.apiUrl}/v1/accounts/register`
    this.http.post(`${base_url}`, data, {headers: new HttpHeaders(this.headers)})
      .subscribe(
        (data) => {
          console.log('data');
          console.log(data);
          this.tokenService.store(data)
        },
      )
  }

  isLogged() {
    return this.tokenService.isLogged();
  }
  
  updateProfile(data:any) {
    let headers = this.makeHeaders();
    console.log('enviando');
    var base_url =  `${environment.apiUrl}/v1/accounts/users/`
    this.http.patch(`${base_url}`, data, {headers: new HttpHeaders(headers)})
      .subscribe(
        (data) => {
          console.log('enviando user data');
          console.log(data);
          this.tokenService.store(data)
        },
      )
  }
  
  getUserData() {
    let headers = this.makeHeaders();
    var base_url =  `${environment.apiUrl}/v1/accounts/whoami`
    return this.http.get(`${base_url}`, {headers: new HttpHeaders(headers)})
  }

}
