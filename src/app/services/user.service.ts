import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient, private tokenService: TokenService) { }

  login(data: any) {
    console.log('pelo servico')
    var base_url =  `${environment.apiUrl}/v1/auth/login/`
    this.http.post(`${base_url}`, data)
      .subscribe((data) => {
        console.log('data logado');
        console.log(data);
        this.tokenService.store(data)
      })
  }
  

  // login
  // criar conta
  // editar conta

  // pegar o token pra por nas requisicoes logadas
}
