import {Injectable} from '@angular/core';
import {Movie} from "../models/Movie";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {ConfigService} from "./config.service";
import {MovieAdapter} from "../adapters/movie-adapter";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private static count: number = 0;


  constructor(private http: HttpClient, private config: ConfigService, private movieAdapter: MovieAdapter) {
    console.log("env: ", config.getEnv("env"))
    console.log("host:", config.getConfig("host"))
  }

  getMovies() {
    return this.http.get<Movie[]>(environment.movieApiUrl)
      .pipe(map((data: any[]) => data.map(item => this.movieAdapter.adapt(item)))).toPromise();
  }

  findMovie(id: number) {
    return this.http.get<Movie>(`${environment.movieApiUrl}/${id}`);
  }

  lookupMovie(searchTitle: string) {
    return this.http.get<Movie[]>(`${environment.movieApiUrl}/search`, {params: {title: searchTitle}})
      .pipe(map((data: any[]) => data.map(item => this.movieAdapter.adapt(item)))).toPromise();
  }

  addMovie(onlineId: string | undefined) {
    return this.http.post<Movie>(`${environment.movieApiUrl}`, {"apiId": onlineId}).toPromise();
  }

  delete(id: number | undefined) {
    return this.http.delete( `${environment.movieApiUrl}/${id}`).toPromise();
  }

  test () {
    MovieService.count += 1
    return new Observable(subscriber => {
      setInterval(() => {
        subscriber.next("subscription count: " + MovieService.count)
      }, 1000);
      setTimeout(() => {
        subscriber.complete();
      }, 1500);
    });
  }
}
