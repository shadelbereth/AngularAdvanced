import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit { //Parent
  foundMovies: Movie[] = [];

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().then(movieResponse => {
      this.foundMovies = movieResponse
    });
  }

}
