import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path:'samples', redirectTo: "/samples", pathMatch:"full"},
  {path:'', component:HomeComponent},
  {path:'**', redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
