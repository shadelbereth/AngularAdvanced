import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ListComponent} from "./components/list/list.component";
import {MovieDetailComponent} from "./components/movie-detail/movie-detail.component";
import {MovieAddComponent} from "./components/movie-add/movie-add.component";
import {MovieHomeComponent} from "./components/movie-home/movie-home.component";
import {TvShowHomeComponent} from "./components/tv-show-home/tv-show-home.component";
import {TvShowDetailComponent} from "./components/tv-show-detail/tv-show-detail.component";
import {TvShowAddComponent} from "./components/tv-show-add/tv-show-add.component";
import {HomeComponent} from "./components/home/home.component";

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
