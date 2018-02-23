import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { ElementRef } from '@angular/core/src/linker/element_ref';

// By importing just the rxjs operators we need, We're theoretically able
// to reduce our build size vs. importing all of them.
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/switch';

import { SearchResult } from '../you-tube-search/search-result.model';
import { YouTubeSearchService } from '../you-tube-search/you-tube-search.service';

@Component({
  selector: 'app-search-box',
  template: `<input type="text" class="form-control" placeholder="Search" autofocus>
  `,
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

  constructor(private youtube: YouTubeSearchService, private elem: ElementRef) { }

  ngOnInit() {
    // convert the `keyup` event into an observable stream
    Observable.fromEvent(this.elem.nativeElement, 'keyup')
      .map((e: any) => e.target.value) // extract the value of the input
      .filter((text: string) => text.length > 1) // filter out if empty
      .debounceTime(250)                         // only once every 250ms
      .do(() => this.loading.emit(true))         // enable loading
      // search, discarding old events if new input comes in
      .map((query: string) => this.youtube.search(query))
      .switch()
      // act on the return of the search
      .subscribe(
      (results: SearchResult[]) => { // on sucesss
        this.loading.emit(false);
        this.results.emit(results);
      },
      (err: any) => { // on error
        console.log(err);
        this.loading.emit(false);
      },
      () => { // on completion
        this.loading.emit(false);
      }
      );
  }

}
