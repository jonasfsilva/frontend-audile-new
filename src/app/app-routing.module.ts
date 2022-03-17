import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminComponent } from "./pages/admin/admin.component";
import { ConvertComponent } from "./pages/admin/convert/convert.component";
import { MyAudiosComponent } from "./pages/admin/my-audios/my-audios.component";
import { MyDataComponent } from "./pages/admin/my-data/my-data.component";
import { PlansComponent } from "./pages/admin/plans/plans.component";
import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RegisterComponent } from "./pages/register/register.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "admin",
    component: AdminComponent,
    children: [
      {
        path: "convert",
        component: ConvertComponent,
      },
      {
        path: "my-audios",
        component: MyAudiosComponent,
      },
      {
        path: "plans",
        component: PlansComponent,
      },
      {
        path: "my-data",
        component: MyDataComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
