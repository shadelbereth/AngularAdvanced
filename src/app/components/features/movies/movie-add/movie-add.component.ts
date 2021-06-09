import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../../../services/movie.service";
import {Movie} from "../../../../models/Movie";
import {Router} from "@angular/router";

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

  search(title: string) {
    // console.log(ngForm.form.controls.title.errors);
    // if (ngForm.valid) {
    this.movieService.lookupMovie(title).then(movieResponse => {
      this.foundMovies = movieResponse
    });
    // }
  }
}
