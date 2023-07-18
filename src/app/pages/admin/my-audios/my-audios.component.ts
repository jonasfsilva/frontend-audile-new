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
    this.getMyConversations()
    console.log('this.myAudios')
    console.log(this.myAudios)
  }

  getMyConversations(): any {
    this.conversion_service.getConversions()
    .subscribe(
      {
        next: (response: any) => {
          this.myAudios = response
        },
        error: (err: any) => {
          return err
        },
        complete() {
          console.log('fim')
        },
      }
    )
  }

  ngOnInit(): void {}

}
