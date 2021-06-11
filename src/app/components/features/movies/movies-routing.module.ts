import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MovieAddComponent} from "./movie-add/movie-add.component";
import {MovieDetailComponent} from "./movie-detail/movie-detail.component";

const routes: Routes = [
  {path: 'add', component: MovieAddComponent},
  {path: ':id', component: MovieDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
