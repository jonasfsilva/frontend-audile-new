import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/services/token.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // var data = null;

  constructor(private http : HttpClient, private tokenService: TokenService) { }
  
  ngOnInit(): void {
  }

  login() {
    var data = {
      "username": "admin@gmail.com",
      "password": "1@345678"
    }
    
    // events: `${environment.algoliaUrlEvent}/events`,
    this.http.post(`http://localhost:8000/v1/auth/login/`, data)
      .subscribe((data) => {
        console.log(data);
        this.tokenService.store(data)
      })
  }
}
