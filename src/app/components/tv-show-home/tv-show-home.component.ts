import { Component, OnInit } from '@angular/core';
import {TvShow} from "../../models/TvShow";
import {TvShowService} from "../../services/tv-show.service";
import {Router} from "@angular/router";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-tv-show-home',
  templateUrl: './tv-show-home.component.html',
  styleUrls: ['./tv-show-home.component.css']
})
export class TvShowHomeComponent implements OnInit {

  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService, private router: Router) {
  }

  ngOnInit(): void {
    this.fetchTvShows();
  }

  private fetchTvShows() {
    this.tvShowService.getTvShows().then(tvShowsResponse => this.tvShows = tvShowsResponse);
  }

  gotoDetail(item: Item) {
    console.log(item)
    this.router.navigate(['tvshow/detail', item.id]);
  }

  delete(item: Item) {
    this.tvShowService.delete(item.id).then(() => {
      this.fetchTvShows();
    });
  }
}
