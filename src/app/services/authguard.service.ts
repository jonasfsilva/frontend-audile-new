import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  token_service: TokenService;
  // let token_service;

  constructor(service: TokenService) {
    this.token_service = service;
  }

  canActivate() {
    return this.token_service.isLogged();
  }

}
