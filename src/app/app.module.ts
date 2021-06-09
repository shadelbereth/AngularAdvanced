import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {AuthInterceptor} from "./services/auth.interceptor";
import {MenubarModule} from "primeng/menubar";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {ConfigService} from "./services/config.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HomeComponent } from './components/home/home.component';
import {InputSwitchModule} from "primeng/inputswitch";
import {MoviesModule} from "./components/features/movies/movies.module";
import {TVShowsModule} from "./components/features/tv-shows/tvshows.module";
import {PagesModule} from "./components/pages/pages.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    MoviesModule,
    TVShowsModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MenubarModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    BrowserAnimationsModule,
    InputSwitchModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }, ConfigService,
    {provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
