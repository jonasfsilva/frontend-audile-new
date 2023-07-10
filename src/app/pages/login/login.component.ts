import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user_service: UserService, private router: Router) { }
  
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        username: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
      }
    );
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.form.controls;
  }

  onLogin(): void {
    console.log('submit')
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
    
    var data = JSON.stringify(this.form.value, null, 2);

    this.user_service.login(data)
    this.router.navigate(['/admin']);
    
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  
}
