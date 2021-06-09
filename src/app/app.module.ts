import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {ConfigService} from "./services/config.service";
import {MoviesModule} from "./components/features/movies/movies.module";
import {TVShowsModule} from "./components/features/tv-shows/tvshows.module";
import {PagesModule} from "./components/pages/pages.module";
import {CoreModule} from "./components/core/core.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CoreModule,
    MoviesModule,
    TVShowsModule,
    PagesModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    CoreModule.forRoot(),
    ConfigService,
    {provide: APP_INITIALIZER, useFactory: (config: ConfigService) => () => config.load(), deps: [ConfigService], multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
