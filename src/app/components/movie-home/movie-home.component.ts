import {Component, OnDestroy, OnInit} from '@angular/core';
import {MovieService} from "../../services/movie.service";
import {Movie} from "../../models/Movie";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.css']
})
export class MovieHomeComponent implements OnInit, OnDestroy { //Parent
  foundMovies: Movie[] = [];
  private subscription: Subscription | undefined;

  constructor(private movieService: MovieService, private router: Router) {
  }

  ngOnInit(): void {
    this.movieService.getMovies().then(movieResponse => {
      this.foundMovies = movieResponse
    });
    this.subscription = this.movieService.test().subscribe(value => console.log("subscribed: ", value));
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }

  showDetail(movie: Movie) {
    this.router.navigate(["movie/detail", movie.id]);
  }
}
