import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {NgForm} from "@angular/forms";
import {Item} from "../../models/Item";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() searchedItem: EventEmitter<Item> = new EventEmitter<Item>();

  constructor() {
  }

  ngOnInit(): void {
  }

  search(searchForm: NgForm) {
    console.log(searchForm);
    if (searchForm.valid) {
      this.searchedItem.emit(searchForm.value);
    }
  }
}
