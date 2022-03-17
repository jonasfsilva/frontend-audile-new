import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdminComponent } from "./admin.component";
import { ConvertComponent } from "./convert/convert.component";
import { MyAudiosComponent } from "./my-audios/my-audios.component";
import { PlansComponent } from "./plans/plans.component";
import { MyDataComponent } from "./my-data/my-data.component";

@NgModule({
  declarations: [ConvertComponent, MyAudiosComponent, PlansComponent],
  imports: [CommonModule],
})
export class AdminModule {}
