import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";
import {DocsComponent} from "./component/docs/docs.component";
import {ApiComponent} from "./component/api/api.component";

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'docs', component:DocsComponent},
  {path:'api', component:ApiComponent},
  {path:'', redirectTo: "/home", pathMatch:"full"},
  {path:'**', redirectTo: "/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
