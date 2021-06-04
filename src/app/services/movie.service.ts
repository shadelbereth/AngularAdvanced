import {Injectable} from '@angular/core';
import {Movie} from "../models/Movie";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Subject} from "rxjs";
import {timeInterval} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MovieService {


  constructor(private http: HttpClient) {
  }

  getMovies() {
    return this.http.get<Movie[]>(environment.movieApiUrl).toPromise();
  }

  findMovie(id: number) {
    return this.http.get<Movie>(`${environment.movieApiUrl}/${id}`).toPromise();
  }

  lookupMovie(searchTitle: string) {
    return this.http.get<Movie[]>(`${environment.movieApiUrl}/search`, {params: {title: searchTitle}});
  }

  addMovie(onlineId: string | undefined) {
    return this.http.post<Movie>(`${environment.movieApiUrl}`, {"apiId": onlineId});
  }

  delete(id: number | undefined) {
    return this.http.delete( `${environment.movieApiUrl}/${id}`);
  }
}
