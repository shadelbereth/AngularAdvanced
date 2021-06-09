import { Component, OnInit } from '@angular/core';
import {TvShow} from "../../models/TvShow";
import {TvShowService} from "../../services/tv-show.service";
import {Router} from "@angular/router";
import {Item} from "../../models/Item";
import {Subject} from "rxjs";

@Component({
  selector: 'app-tv-show-add',
  templateUrl: './tv-show-add.component.html',
  styleUrls: ['./tv-show-add.component.css']
})
export class TvShowAddComponent implements OnInit {

  tvShows: TvShow[] = [];
  online: boolean = false;
  private title: string = "";
  online$ = new Subject<boolean>();

  constructor(private tvShowService: TvShowService, private router: Router) {
  }

  ngOnInit(): void {
    this.online$.subscribe(value => {
      this.online = value;
      this.searchTvShow(this.title);
    });
  }

  searchTvShow(title: string) {
    this.title = title;
    this.tvShowService.lookupTvShow(this.title, this.online).then(tvShowResponse => this.tvShows = tvShowResponse);
  }

  addToWatchListAndGoToDetail(tvShow: Item) {
    this.tvShowService.saveToWatchList(tvShow.onlineId).then(tvShowResponse => {
      this.router.navigate(['tvshow/detail', tvShowResponse.id]);
    })
  }

}
