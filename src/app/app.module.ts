import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './components/header/header.component';
import {ListComponent} from './components/list/list.component';
import {MovieDetailComponent} from './components/movie-detail/movie-detail.component';
import {HttpClientModule} from "@angular/common/http";
import {MovieAddComponent} from './components/movie-add/movie-add.component';
import {FormsModule} from "@angular/forms";
import { MovieHomeComponent } from './components/movie-home/movie-home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListComponent,
    MovieDetailComponent,
    MovieAddComponent,
    MovieHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
