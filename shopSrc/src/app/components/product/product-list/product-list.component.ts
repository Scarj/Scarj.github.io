import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Product} from '../../../data/product';
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.less'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];


  constructor(private productService: ProductService) {

  }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      products => {
        this.products = products;
      },
      error => {
        console.log(error)
      }
    );
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
