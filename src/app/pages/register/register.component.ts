import { Component, OnInit } from "@angular/core";
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from "src/app/services/user.service";

// import { Validation } from './utils/validation'

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  form!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user_service: UserService) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        first_name: ['', Validators.required],
        // username: [
        //   '',
        //   [
        //     Validators.required,
        //     Validators.minLength(6),
        //     Validators.maxLength(20)
        //   ]
        // ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40)
          ]
        ],
        // confirmPassword: ['', Validators.required],
        // acceptTerms: [false, Validators.requiredTrue]
      }
    );
  }

  get f(): { [key: string]: AbstractControl; } {
    return this.form.controls;
  }

  onSubmit(): void {
    console.log('submit')
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }


    console.log(JSON.stringify(this.form.value, null, 2));
    var data = JSON.stringify(this.form.value, null, 2);
    this.user_service.signUp(data);
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
}
