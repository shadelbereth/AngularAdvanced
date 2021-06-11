import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MovieAddComponent} from "./movie-add/movie-add.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MoviesRoutingModule} from "./movies-routing.module";



@NgModule({
  declarations: [MovieAddComponent, MovieDetailComponent],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
