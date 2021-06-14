import {Adapter} from "./adapter";
import {Movie, MovieObj} from "../models/Movie";
import {Injectable} from "@angular/core";

@Injectable({providedIn: "root"})
export class MovieAdapter implements Adapter<Movie>{
  adapt(item: any): Movie {
    return new MovieObj(item.id, item.onlineId, item.plot, item.poster, item.rating, item.runtime, item.seen,
      item.title, item.year);
  }
}
