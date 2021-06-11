import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {MovieHomeComponent} from "./components/pages/movie-home/movie-home.component";
import {TvShowHomeComponent} from "./components/pages/tv-show-home/tv-show-home.component";
import {HomeComponent} from "./components/core/home/home.component";
import {LoginComponent} from "./components/core/login/login.component";

export const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'tvshow/home', component: TvShowHomeComponent},
  {path: 'tvshow', loadChildren: () => import('./components/features/tv-shows/tvshows.module').then(m => m.TVShowsModule)},
  {path: 'movie/home', component: MovieHomeComponent},
  {path: 'movie', loadChildren: () => import('./components/features/movies/movies.module').then(m => m.MoviesModule)},
  {path: '**', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
