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
  
  updateProfile() {}
  

  // login
  // criar conta
  // editar conta

  // pegar o token pra por nas requisicoes logadas
}
