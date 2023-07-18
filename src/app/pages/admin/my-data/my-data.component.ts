import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { UserService } from "src/app/services/user.service";

@Component({
  selector: "app-my-data",
  templateUrl: "./my-data.component.html",
  styleUrls: ["../admin.component.scss"],
})
export class MyDataComponent implements OnInit {
  userForm : any;
  userData : any;

  constructor(
    private user_service: UserService,
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      first_name: ["", [Validators.required]],
      last_name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
    });
    this.getUserData();
  }

  getUserData(){
    this.user_service.getUserData().subscribe(
        (data) => {
          console.log('data');
          console.log(data);
          this.userData = data;
          this.userForm.patchValue(data);
        },
      )
  }

  onSubmitUserForm(){
    console.log("submit");

    if (this.userForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.userForm.value, null, 2));

    var data = JSON.stringify(this.userForm.value, null, 2);
    this.user_service.updateProfile(data);
  }

  // pre popular campos de form com data
  // permitir a edicao de perfil
}
