import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';
import {HomeIntroComponent} from './component/home/intro/intro.component';
import {ContributeComponent} from './component/home/contribute/contribute.component';
import {FeatureComponent} from './component/home/feature/feature.component';
import {CardComponent} from './component/utils/card/card.component';
import {UseCaseComponent} from './component/home/use-case/use-case.component';
import {CaseStudyComponent} from './component/case-study/case-study.component';
import {CaseStudyIntroComponent} from './component/case-study/intro/intro.component';

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {CompanyComponent} from './component/case-study/company/company.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HomeIntroComponent,
    UseCaseComponent,
    FeatureComponent,
    ContributeComponent,
    CaseStudyComponent,
    CaseStudyIntroComponent,
    CardComponent,
    CompanyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatToolbarModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  exports: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
