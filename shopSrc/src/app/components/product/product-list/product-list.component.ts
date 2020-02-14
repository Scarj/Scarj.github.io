import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../../../data/product';
import {ProductService} from "../../../services/product/product.service";
import {Observable} from "rxjs";
import {CartService} from "../../../services/checkout/cart.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;


  constructor(private productService: ProductService, private cartService: CartService) {

  }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }
}
/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
