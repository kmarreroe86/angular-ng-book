import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { MoreHttpRequestsComponent } from '../app/more-http-requests/more-http-requests.component';
import { SearchBoxComponent } from '../app/search-box/search-box.component';
import { SearchResultComponent } from '../app/search-result/search-result.component';
import { SimpleHttpComponent } from '../app/simple-http/simple-http.component';
import { YouTubeSearchComponent } from '../app/you-tube-search/you-tube-search.component';


@NgModule({
  declarations: [
    AppComponent,
    MoreHttpRequestsComponent,
    SearchBoxComponent,
    SearchResultComponent,
    SimpleHttpComponent,
    YouTubeSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [/*youTubeSearchInjectables*/],
  bootstrap: [AppComponent]
})
export class AppModule { }
