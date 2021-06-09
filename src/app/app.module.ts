import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ListComponent} from './components/list/list.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {MovieAddComponent} from './components/movie-add/movie-add.component';
import {FormsModule} from "@angular/forms";
import {MovieHomeComponent} from './components/movie-home/movie-home.component';
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
import { TvShowHomeComponent } from './components/tv-show-home/tv-show-home.component';
import { TvShowAddComponent } from './components/tv-show-add/tv-show-add.component';
import { TvShowDetailComponent } from './components/tv-show-detail/tv-show-detail.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import {InputSwitchModule} from "primeng/inputswitch";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    MovieDetailComponent,
    MovieAddComponent,
    MovieHomeComponent,
    TvShowHomeComponent,
    TvShowAddComponent,
    TvShowDetailComponent,
    SearchComponent,
    HomeComponent
  ],
  imports: [
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
