import { Component, OnInit } from "@angular/core";
import { LibraryService } from "src/app/services/library.service";

@Component({
  selector: "app-my-audios",
  templateUrl: "./my-audios.component.html",
  styleUrls: ["../admin.component.scss"],
})
export class MyAudiosComponent implements OnInit {
  myAudios : any;
  
  constructor(
    private conversion_service: LibraryService,
  ) {
    this.myAudios = this.conversion_service.getConversions();
    console.log('this.myAudios')
    console.log(this.myAudios)
  }

  ngOnInit(): void {}

}
