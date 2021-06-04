import {Component, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {

  movie: Movie | undefined;

  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    this.movieService.findMovie(Number(id)).then(movieResponse => this.movie = movieResponse);
  }

  delete(movie: Movie | undefined) {
    this.movieService.delete(movie?.id).subscribe(() => this.router.navigate(["/movie/home"]));
  }

  back() {
    // this.location.back();
  }
}
