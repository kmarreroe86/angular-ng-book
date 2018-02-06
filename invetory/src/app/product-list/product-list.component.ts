import {Component, OnInit, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../product-model";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() productList: Product[];
  @Output() onProductSelected: EventEmitter<Product>;

  private productSelected: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(prod: Product): void {
    this.productSelected = prod;
    this.onProductSelected.emit(prod);
  }

  isSelected(prod: Product): boolean {
    if (!prod || !this.productSelected) return false;

    return prod.sku === this.productSelected.sku;
  }


}
