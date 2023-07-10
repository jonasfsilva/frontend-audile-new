import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { SettingsService } from "src/app/services/settings.service";
import { UserService } from "src/app/services/user.service";
// import { Track } from "ngx-audio-player";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  isLogged: boolean;
  contactForm: any;

  constructor(
    private user_service: UserService,
    private formBuilder: FormBuilder,
    private settings_service: SettingsService
  ) {
    this.isLogged = this.user_service.isLogged();
  }
  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = false;
  msaapDisplayRepeatControls = false;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  playlist = [{}, {}];
  // msaapPlaylist: Track[] = [
  //   {
  //     title: "In Love | A Himitsu feat. Nori",
  //     link: "https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0",
  //   },
  //   {
  //     title: "Cartoon – On & On (feat. Daniel Levi) [NCS Release]",
  //     link: "https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0",
  //   },
  // ];

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      message: ["", [Validators.required, Validators.minLength(3)]],
    });
  }

  onSubmitContact(): void {
    console.log("submit");

    if (this.contactForm.invalid) {
      return;
    }

    console.log(JSON.stringify(this.contactForm.value, null, 2));

    var data = JSON.stringify(this.contactForm.value, null, 2);
    this.settings_service.sendContact(data);
    // this.router.navigate(['/admin']);
  }
}
