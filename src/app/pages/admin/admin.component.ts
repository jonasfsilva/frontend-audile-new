import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.scss"],
})
export class AdminComponent implements OnInit {
  selectedTab = "myData";
  myData = true;
  convert = false;
  plans = false;
  myAudios = false;
  clickMenu = false;
  constructor() {}

  ngOnInit(): void {}

  async changeTab(selectedTab: string) {
    this.selectedTab = selectedTab;

    if (this.selectedTab === "myData") {
      this.myData = true;
      this.plans = false;
      this.convert = false;
      this.myAudios = false;
    } else if (this.selectedTab === "convert") {
      this.convert = true;
      this.myData = false;
      this.plans = false;
      this.myAudios = false;
    } else if (this.selectedTab === "myAudios") {
      this.myAudios = true;
      this.convert = false;
      this.myData = false;
      this.plans = false;
    } else if (this.selectedTab === "plans") {
      this.plans = true;
      this.myAudios = false;
      this.convert = false;
      this.myData = false;
    }
  }
}
