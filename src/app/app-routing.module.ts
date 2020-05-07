import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path:'', component:HomeComponent, pathMatch:"full"},
  {path:'api', redirectTo: "/api", pathMatch:"full"},
  {path:'docs', redirectTo: "/docs", pathMatch:"full"},
  {path:'guides', redirectTo: "/docs/installation-guide/prerequisites", pathMatch:"full"},
  {path:'samples', redirectTo: "/samples", pathMatch:"full"},
  {path:'**', redirectTo: ""}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
