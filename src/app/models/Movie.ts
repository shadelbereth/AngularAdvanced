import {Item} from "./Item";

export interface Movie extends Item{
  plot?: string;
  seen?: boolean;
}

export class MovieObj implements Movie {
  id: number;
  onlineId: string;
  plot: string;
  poster: string;
  rating: number;
  runtime: number;
  seen: boolean;
  title: string;
  year: 0;

  constructor(id: number, onlineId: string, plot: string, poster: string, rating: number, runtime: number,
              seen: boolean, title: string, year: 0) {
    this.id = id;
    this.onlineId = onlineId;
    this.plot = plot;
    this.poster = poster;
    this.rating = rating;
    this.runtime = runtime;
    this.seen = seen;
    this.title = title;
    this.year = year;
  }
}
