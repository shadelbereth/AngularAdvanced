import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {Movie} from "../models/Movie";
import {MovieService} from "./movie.service";

@Injectable({
  providedIn: 'root'
})
export class MovieResolver implements Resolve<Movie> {
  constructor(private movieService: MovieService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {
    return this.movieService.findMovie(Number(route.paramMap.get('id')));
  }
}
