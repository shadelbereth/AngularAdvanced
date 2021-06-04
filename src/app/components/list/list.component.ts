import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit { //Child
  @Input()
  movies: Movie[] = [];
  @Output()
  add : EventEmitter<Movie> = new EventEmitter<Movie>();

  constructor(private movieService: MovieService) {
  }

  ngOnInit(): void {

  }


}
