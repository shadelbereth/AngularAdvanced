import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {TvShowService} from "../../../../services/tv-show.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tv-show-new',
  templateUrl: './tv-show-new.component.html',
  styleUrls: ['./tv-show-new.component.css']
})
export class TvShowNewComponent implements OnInit {
  newTvShowForm: FormGroup = new FormGroup({});

  constructor(private formBuilder: FormBuilder, private tvShowService: TvShowService, private router: Router) { }

  ngOnInit(): void {
    this.newTvShowForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(2)]],
      year: [2000, [Validators.min(1900), Validators.max(new Date().getFullYear())]],
      runtime: [0, Validators.min(0)],
      seasons: [1, Validators.min(1)],
      episodes: [0, Validators.min(0)],
      overview: ['', Validators.required, Validators.minLength(20)],
      posterUrl: ['']
    });
  }

  createNewTvShow() {
    this.tvShowService.createNewTvShow(this.newTvShowForm.value)
      .subscribe(response => this.router.navigate(["tvshow/detail", response.id]));
  }
}
