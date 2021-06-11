import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TvShowAddComponent} from "./tv-show-add/tv-show-add.component";
import {TvShowDetailComponent} from "./tv-show-detail/tv-show-detail.component";

const routes: Routes = [
  {path: 'add', component: TvShowAddComponent},
  {path: ':id', component: TvShowDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }
