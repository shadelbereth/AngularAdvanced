import {NgModule, Optional, SkipSelf} from '@angular/core';
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {AuthInterceptor} from "../../services/auth.interceptor";
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {FormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {InputTextModule} from "primeng/inputtext";
import {InputSwitchModule} from "primeng/inputswitch";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MenubarModule} from "primeng/menubar";
import {AppRoutingModule} from "../../app-routing.module";
import { LoginComponent } from './login/login.component';
import {AuthService} from "./auth.service";
import {AuthGuard} from "./auth.guard";



@NgModule({
  declarations: [HeaderComponent, HomeComponent, LoginComponent],
  imports: [
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
    HeaderComponent,
    HomeComponent,
    AppRoutingModule,
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
  providers: [
    AuthService,
    AuthGuard
  ]
})
export class CoreModule {
  static forRoot() {
    return [
      {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}
    ];
  }

  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error("CoreModule is already loaded");
    }
  }
}
