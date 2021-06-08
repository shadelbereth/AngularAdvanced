import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'My movie library';
  items: MenuItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.items = [{
      label: "Movie",
      items: [
        {
          label: 'Search/add',
          icon: 'pi pi-fw pi-search',
          routerLink: "/movie/add"
        }, {
          label: 'Private collection',
          icon: 'pi pi-fw pi-video',
          routerLink: "/movie/home"
        }
      ]
    },
      {
        label: "TvShow",
        items: [
          {
            label: 'Search/add',
            icon: 'pi pi-fw pi-search',
            routerLink: "/tvshow/add"
          }, {
            label: 'WatchList',
            icon: 'pi pi-fw pi-video',
            routerLink: "/tvshow/home"
          }
        ]
      }]
  };

}
