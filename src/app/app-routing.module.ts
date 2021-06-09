import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from "./components/features/movies/movie-detail/movie-detail.component";
import {MovieAddComponent} from "./components/features/movies/movie-add/movie-add.component";
import {MovieHomeComponent} from "./components/pages/movie-home/movie-home.component";
import {TvShowHomeComponent} from "./components/pages/tv-show-home/tv-show-home.component";
import {TvShowDetailComponent} from "./components/features/tv-shows/tv-show-detail/tv-show-detail.component";
import {TvShowAddComponent} from "./components/features/tv-shows/tv-show-add/tv-show-add.component";
import {HomeComponent} from "./components/core/home/home.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'tvshow/home', component: TvShowHomeComponent},
  {path: 'tvshow/add', component: TvShowAddComponent},
  {path: 'tvshow/detail/:id', component: TvShowDetailComponent},
  {path: 'movie/home', component: MovieHomeComponent},
  {path: 'movie/add', component: MovieAddComponent},
  {path: 'movie/detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
