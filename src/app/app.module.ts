import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { ConvertComponent } from "./pages/admin/convert/convert.component";
import { MyAudiosComponent } from "./pages/admin/my-audios/my-audios.component";
import { MyDataComponent } from "./pages/admin/my-data/my-data.component";
import { PlansComponent } from "./pages/admin/plans/plans.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";
// import { NgxAudioPlayerModule } from "ngx-audio-player";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AdminComponent,
    MyAudiosComponent,
    ConvertComponent,
    PlansComponent,
    MyDataComponent,
  ],
  // imports: [BrowserModule, AppRoutingModule, NgxAudioPlayerModule, BrowserAnimationsModule],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
