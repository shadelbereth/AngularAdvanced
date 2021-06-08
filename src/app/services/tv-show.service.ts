import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {TvShow} from "../models/TvShow";

@Injectable({
  providedIn: 'root'
})
export class TvShowService {

  constructor(private http: HttpClient) {
  }

  getTvShows() {
    return this.http.get<TvShow[]>(`${environment.tvShowApiUrl}`).toPromise();
  }

  getTvShow(id: number) {
    return this.http.get<TvShow>(`${environment.tvShowApiUrl}/${id}`).toPromise();
  }

  lookupTvShow(searchTitle: string) {
    return this.http.get<TvShow[]>(`${environment.tvShowApiUrl}/search`, {params: {title: searchTitle}}).toPromise();
  }

  saveToWatchList(onlineId: string | undefined) {
    return this.http.post<TvShow>(`${environment.tvShowApiUrl}/watchlist`, {"apiId": onlineId}).toPromise();
  }

  delete(id: number | undefined) {
    return this.http.delete(`${environment.tvShowApiUrl}/${id}`).toPromise();
  }


}
