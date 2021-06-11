import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {MovieAddComponent} from "./movie-add/movie-add.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {MoviesRoutingModule} from "./movies-routing.module";
import {MovieService} from "../../../services/movie.service";
import {MovieResolver} from "../../../services/movie.resolver";



@NgModule({
  declarations: [MovieAddComponent, MovieDetailComponent],
  imports: [
    SharedModule,
    MoviesRoutingModule
  ],
  providers: [
    MovieService,
    MovieResolver
  ]
})
export class MoviesModule { }
