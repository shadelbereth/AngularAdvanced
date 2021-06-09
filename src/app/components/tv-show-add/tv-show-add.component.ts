import { Component, OnInit } from '@angular/core';
import {TvShow} from "../../models/TvShow";
import {TvShowService} from "../../services/tv-show.service";
import {Router} from "@angular/router";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-tv-show-add',
  templateUrl: './tv-show-add.component.html',
  styleUrls: ['./tv-show-add.component.css']
})
export class TvShowAddComponent implements OnInit {

  tvShows: TvShow[] = [];

  constructor(private tvShowService: TvShowService, private router: Router) {
  }

  ngOnInit(): void {
  }

  searchTvShow(title: string) {
    this.tvShowService.lookupTvShow(title).then(tvShowResponse => this.tvShows = tvShowResponse);
  }

  addToWatchListAndGoToDetail(tvShow: Item) {
    this.tvShowService.saveToWatchList(tvShow.onlineId).then(tvShowResponse => {
      this.router.navigate(['tvshow/detail', tvShowResponse.id]);
    })
  }

}
