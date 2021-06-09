import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subject} from "rxjs";
import {debounceTime, distinctUntilChanged, filter} from "rxjs/operators";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  inputTitle$ = new Subject<string>();

  @Output() searchedItem: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    this.inputTitle$?.pipe(
      debounceTime(400),
      filter(value => value.length > 2),
      distinctUntilChanged()
    ).subscribe(value => this.searchedItem.emit(value));
  }
}
