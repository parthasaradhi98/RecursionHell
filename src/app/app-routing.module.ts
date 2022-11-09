import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./shared/guard/auth.guard";
import { VideoComponent } from "./video/video.component";
import { BrowserModule } from "@angular/platform-browser";
import { DashboardComponent } from "./layout/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
    canActivate: [AuthGuard],
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then((m) => m.LoginModule),
  },
  {
    path: "videos",
    component: VideoComponent,
  },
  {
    path: "auth/google/callback",
    loadChildren: () =>
      import("./layout/layout.module").then((m) => m.LayoutModule),
  },
  {
    path: "**",
    redirectTo: "",
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule {}
