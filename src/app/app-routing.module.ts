import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MovieDetailComponent} from "./components/features/movies/movie-detail/movie-detail.component";
import {MovieAddComponent} from "./components/features/movies/movie-add/movie-add.component";
import {MovieHomeComponent} from "./components/pages/movie-home/movie-home.component";
import {TvShowHomeComponent} from "./components/pages/tv-show-home/tv-show-home.component";
import {TvShowDetailComponent} from "./components/features/tv-shows/tv-show-detail/tv-show-detail.component";
import {TvShowAddComponent} from "./components/features/tv-shows/tv-show-add/tv-show-add.component";
import {HomeComponent} from "./components/core/home/home.component";
import {LoginComponent} from "./components/core/login/login.component";
import {AuthGuard} from "./components/core/auth.guard";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tvshow/home', component: TvShowHomeComponent},
  {path: 'tvshow/add', component: TvShowAddComponent, canActivate: [AuthGuard]},
  {path: 'tvshow/detail/:id', component: TvShowDetailComponent},
  {path: 'movie/home', component: MovieHomeComponent},
  {path: 'movie/add', component: MovieAddComponent, canActivate: [AuthGuard]},
  {path: 'movie/detail/:id', component: MovieDetailComponent},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
