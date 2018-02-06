import {Component, OnInit, Input, HostBinding} from '@angular/core';
import {Product} from "../product-model";

@Component({
  selector: 'product-image',
  styleUrls: ['./product-image.component.css'],
  template: `<img class="product-image" [src]="product.imageUrl">`
})
export class ProductImageComponent implements OnInit {

  @Input() product: Product;

  @HostBinding('attr.class') cssClass = "ui small image";

  constructor() {
  }

  ngOnInit() {
  }

}
