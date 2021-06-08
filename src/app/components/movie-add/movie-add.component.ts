import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {Router} from "@angular/router";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  foundMovies: Movie[] = [];

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  addSelectedMovieAndDetail(movie: Movie) {
    this.movieService.addMovie(movie.onlineId).then(movieResponse => {
      this.router.navigate(["/movie/detail", movieResponse.id]);
    });
  }

  search(searchedMovie: Item) {
    // console.log(ngForm.form.controls.title.errors);
    // if (ngForm.valid) {
    this.movieService.lookupMovie(searchedMovie.title).then(movieResponse => {
      this.foundMovies = movieResponse
    });
    // }
  }
}
