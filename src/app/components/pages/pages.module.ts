import { NgModule } from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {MovieHomeComponent} from "./movie-home/movie-home.component";
import {TvShowHomeComponent} from "./tv-show-home/tv-show-home.component";



@NgModule({
  declarations: [MovieHomeComponent, TvShowHomeComponent],
  imports: [
    SharedModule
  ]
})
export class PagesModule { }
