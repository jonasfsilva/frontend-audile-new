import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class TokenService{

  private tokenKey:string = 'app_token';

  public store(content:Object) {
      localStorage.setItem(this.tokenKey, JSON.stringify(content));
  }

  private retrieve() {
      let storedToken = localStorage.getItem(this.tokenKey);
      if(!storedToken) throw 'no token found';
      return storedToken;
  }

  public delete() {
    let token = localStorage.removeItem(this.tokenKey);
    return token;
  }

  // public generateNewToken() {
  //     let token:string = '...';//custom token generation;
  //     let currentTime:number = (new Date()).getTime() + ttl;
  //     this.store({ttl: currentTime, token});
  // }

  public retrieveToken() {

      let currentTime:number = (new Date()).getTime(), token = null;
      try {
          let storedToken = JSON.parse(this.retrieve());
          if(storedToken.ttl < currentTime) throw 'invalid token found';
          token = storedToken.token;
      }
      catch(err) {
          console.error(err);
      }
      return token;

  }

  public isLogged(): boolean {
    try {
      let storedToken = JSON.parse(this.retrieve());
      console.log('storedToken')
      console.log(storedToken)
      if(storedToken){
        return true;
      }else{
        return false;
      }
    }
    catch(err) {
        return false;
    }
  }
}
