import { Component, OnInit } from '@angular/core';
import {TvShow} from "../../../../models/TvShow";
import {TvShowService} from "../../../../services/tv-show.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Movie} from "../../../../models/Movie";
import {AuthService} from "../../../core/auth.service";

@Component({
  selector: 'app-tv-show-detail',
  templateUrl: './tv-show-detail.component.html',
  styleUrls: ['./tv-show-detail.component.scss']
})
export class TvShowDetailComponent implements OnInit {

  foundTvShow: TvShow | undefined;

  constructor(private tvShowService: TvShowService, private activateRoute: ActivatedRoute, private router: Router, public authService: AuthService) {

  }

  ngOnInit(): void {
    let id = this.activateRoute.snapshot.paramMap.get('id');
    this.tvShowService.getTvShow(Number(id)).then(tvShowReponse => this.foundTvShow = tvShowReponse);
  }

  delete(tvshow: TvShow | undefined) {
    this.tvShowService.delete(tvshow?.id).then(() => this.router.navigate(["/tvshow/home"]));
  }
}
