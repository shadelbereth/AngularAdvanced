import {Component, OnInit} from '@angular/core';
import {NgForm, NgModel} from "@angular/forms";
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {Router} from "@angular/router";

@Component({
  selector: 'app-movie-add',
  templateUrl: './movie-add.component.html',
  styleUrls: ['./movie-add.component.css']
})
export class MovieAddComponent implements OnInit {
  foundMovies: Movie[] = [];
  validTitle = true;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
  }

  search(searchForm: NgForm) {
    console.log(searchForm);
    if (searchForm.valid) {
      this.movieService.lookupMovie(searchForm.value.title).subscribe(movieReponse => this.foundMovies = movieReponse);
    }
  }

  checkForm(html: NgModel) {
    if(html.invalid){
      setTimeout(() => {
        this.validTitle = false;
      }, 2000);
    }
  }

  addSelectedMovieAndDetail(movie: Movie) {
    this.movieService.addMovie(movie.onlineId).subscribe(movieResponse => {
      this.router.navigate(["/movie/detail", movieResponse.id]);
    });
  }
}
