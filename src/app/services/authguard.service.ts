import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{
  token_service: TokenService;
  // let token_service;

  constructor(service: TokenService, private router: Router) {
    this.token_service = service;
  }

  canActivate() {
    return this.token_service.isLogged() || this.router.createUrlTree(['/login']);
  }

}
