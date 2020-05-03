import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './component/home/home.component';
import {DocsComponent} from './component/docs/docs.component';
import {ApiComponent} from './component/api/api.component';
import {HeaderComponent} from './component/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DocsComponent,
    ApiComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
