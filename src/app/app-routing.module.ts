import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CaseStudyComponent} from "./component/case-study/case-study.component";
import {HomeComponent} from "./component/home/home.component";

const routes: Routes = [
  {path: 'case-study', component: CaseStudyComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: "/"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
