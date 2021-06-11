import { NgModule } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TvShowAddComponent} from "./tv-show-add/tv-show-add.component";
import {TvShowDetailComponent} from "./tv-show-detail/tv-show-detail.component";
import {TvShowRoutingModule} from "./tv-show-routing.module";
import { TvShowNewComponent } from './tv-show-new/tv-show-new.component';



@NgModule({
  declarations: [TvShowAddComponent, TvShowDetailComponent, TvShowNewComponent],
  imports: [
    SharedModule,
    TvShowRoutingModule
  ]
})
export class TVShowsModule { }
