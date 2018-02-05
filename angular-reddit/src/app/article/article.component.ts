import {Component, OnInit, Input, HostBinding} from '@angular/core';

import {Article} from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = "row";
  @Input() article: Article;

  constructor() {
  }

  voteUp() {
    this.article.voteUp();
    return false; //not to propagate the event upwards(click)
  }

  voteDown() {
    this.article.voteDown();
    return false;//not to propagate the event upwards(click)
  }

  ngOnInit() {
  }

}
