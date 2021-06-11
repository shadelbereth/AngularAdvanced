import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieAddComponent} from "./movie-add/movie-add.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";
import {AuthGuard} from "../../core/auth.guard";
import {MovieResolver} from "../../../services/movie.resolver";

const routes: Routes = [
  {path: 'add', component: MovieAddComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: MovieDetailComponent, resolve: {movieDetail: MovieResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
