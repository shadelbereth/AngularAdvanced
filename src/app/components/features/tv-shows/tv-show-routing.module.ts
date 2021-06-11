import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TvShowAddComponent} from "./tv-show-add/tv-show-add.component";
import {TvShowDetailComponent} from "./tv-show-detail/tv-show-detail.component";
import {AuthGuard} from "../../core/auth.guard";

const routes: Routes = [
  {path: 'add', component: TvShowAddComponent, canActivate: [AuthGuard]},
  {path: 'detail/:id', component: TvShowDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TvShowRoutingModule { }
