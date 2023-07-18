import { Component, OnInit } from "@angular/core";
import { PlansService } from "src/app/services/plans.service";

@Component({
  selector: "app-plans",
  templateUrl: "./plans.component.html",
  styleUrls: ["../admin.component.scss"],
})
export class PlansComponent implements OnInit {
  plans:any

  constructor(
    private plans_service: PlansService
  ) {
    this.getCommonPlans()
  }

  ngOnInit(): void {}

  getCommonPlans(){
    this.plans_service.getPlans().subscribe(
      {
        next: (response: any) => {
          console.log(response)
          this.plans = response
        },
        error: (err: any) => {
          console.log(err)
        },
        complete() {
          console.log('fim')
        },
      }
    )
  }
}
