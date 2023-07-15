import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { LibraryService } from "src/app/services/library.service";
import { SettingsService } from "src/app/services/settings.service";

@Component({
  selector: "app-convert",
  templateUrl: "./convert.component.html",
  styleUrls: ["../admin.component.scss"],
})
export class ConvertComponent implements OnInit {
  conversionForm: any;
  voices: any;

  constructor(
    private formBuilder: FormBuilder,
    private conversion_service: LibraryService,
    private settings_service: SettingsService
  ) {
    this.getVoices();
  }

  // <option *ngFor="let person of people" [value]="person.person_name">

  // title = models.CharField(max_length=100, verbose_name="Titulo")
  // text = models.TextField(verbose_name="Texto")
  // voice = models.ForeignKey(Voice, verbose_name="Voz", on_delete=models.PROTECT)
  getVoices(): void {
    this.settings_service.getVoices().subscribe({
      next: (response: any) => {
        this.voices = response;
        console.log("this.voices");
        console.log(this.voices);
        return response;
      },
      error: (err: any) => {
        return err;
      },
      complete() {
        console.log("fim");
      },
    });
  }

  ngOnInit(): void {
    this.conversionForm = this.formBuilder.group({
      title: ["", [Validators.required]],
      text: ["", [Validators.required]],
      voice: ["", [Validators.required]],
    });
  }

  onSubmitConversion(): void {
    console.log("submit");

    console.log(JSON.stringify(this.conversionForm.value, null, 2));

    if (this.conversionForm.invalid) {
      return;
    }else{
      console.log(this.conversionForm)
    }

    console.log(JSON.stringify(this.conversionForm.value, null, 2));

    var data = JSON.stringify(this.conversionForm.value, null, 2);
    this.conversion_service.sendConversion(data);
    // this.router.navigate(['/admin']);
  }
}
