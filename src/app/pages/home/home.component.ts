import { Component, OnInit } from "@angular/core";
import { Track } from "ngx-audio-player";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  constructor() {}
  msaapDisplayTitle = false;
  msaapDisplayPlayList = false;
  msaapPageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msaapDisplayRepeatControls = true;
  msaapDisplayArtist = false;
  msaapDisplayDuration = false;
  msaapDisablePositionSlider = false;
  playlist = [{}, {}];
  msaapPlaylist: Track[] = [
    {
      title: "In Love | A Himitsu feat. Nori",
      link: "https://dl.dropboxusercontent.com/s/9v0psowra7ekhxo/A%20Himitsu%20-%20In%20Love%20%28feat.%20Nori%29.flac?dl=0",
    },
    {
      title: "Cartoon – On & On (feat. Daniel Levi) [NCS Release]",
      link: "https://dl.dropboxusercontent.com/s/w99exjxnwoqwz0e/Cartoon-on-on-feat-daniel-levi-ncs-release.mp3?dl=0",
    },
  ];

  ngOnInit(): void {}
}
