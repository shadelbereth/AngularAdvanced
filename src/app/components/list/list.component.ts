import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {Movie} from "../../models/Movie";
import {MovieService} from "../../services/movie.service";
import {Subscription} from "rxjs";
import {SelectItem} from "primeng/api";
import {ActivatedRoute, Router} from "@angular/router";
import {MovieHomeComponent} from "../movie-home/movie-home.component";
import {Item} from "../../models/Item";
import {TvShowHomeComponent} from "../tv-show-home/tv-show-home.component";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit { //Child
  @Input()
  myItemList: Item[] = [];
  @Output()
  selected: EventEmitter<Item> = new EventEmitter<Item>();

  sortKey: string = "";

  sortOptions: SelectItem[] = [];

  sortOrder: number = 0;

  sortField: string = '';
  hideAddButton: boolean;

  constructor(private movieService: MovieService, private activateRoute: ActivatedRoute, private router: Router) {
    let currentParentComponent = activateRoute.snapshot.component;
    this.hideAddButton = currentParentComponent !== MovieHomeComponent && currentParentComponent !== TvShowHomeComponent;
  }

  ngOnInit(): void {
    this.sortOptions = [
      {label: 'Title A>Z', value: 'title'},
      {label: 'Title Z>A', value: '!title'}
    ];
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    } else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }


}
