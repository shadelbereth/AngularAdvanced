import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {InputSwitchModule} from "primeng/inputswitch";
import {ListComponent} from "../list/list.component";
import {SearchComponent} from "../search/search.component";
import {MenubarModule} from "primeng/menubar";



@NgModule({
  declarations: [ListComponent, SearchComponent],
  imports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputSwitchModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    MenubarModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    ButtonModule,
    CardModule,
    InputTextModule,
    InputSwitchModule,
    BrowserAnimationsModule,
    InputSwitchModule,
    MenubarModule,
    ListComponent,
    SearchComponent
  ]
})
export class SharedModule { }
