import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {HeaderComponent} from './component/header/header.component';

import {MatSlideToggleModule} from "@angular/material/slide-toggle";
import {MatChipsModule} from "@angular/material/chips";
import {MatCardModule} from "@angular/material/card";
import { IntroComponent } from './component/home/intro/intro.component';
import { ContributeComponent } from './component/home/contribute/contribute.component';
import { FeatureComponent } from './component/home/feature/feature.component';
import { CardComponent } from './component/utils/card/card.component';
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";
import { UseCaseComponent } from './component/home/use-case/use-case.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    IntroComponent,
    ContributeComponent,
    FeatureComponent,
    CardComponent,
    UseCaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    MatSlideToggleModule,
    MatChipsModule,
    MatCardModule,
    MatGridListModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

}
