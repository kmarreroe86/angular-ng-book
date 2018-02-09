import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';


import {AppComponent} from './app.component';
import {UserDemoComponent} from './user-demo/user-demo.component';

import {UserService} from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    UserDemoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
