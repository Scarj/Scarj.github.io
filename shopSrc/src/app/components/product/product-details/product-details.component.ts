import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CartService} from '../../../services/checkout/cart.service';
import {Product} from '../../../data/product';
import {ProductService} from "../../../services/product/product.service";

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ProductDetailsComponent implements OnInit {
  product: Product;

  constructor(private route: ActivatedRoute, private cartService: CartService, private productService: ProductService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      let productId = +params.get('productId');
      this.productService.getProducts().subscribe(
        products => {
          this.product = products[productId];
        }
      );
    });
  }

  addToCart(product) {
    window.alert('Your product has been added to the cart!');
    this.cartService.addToCart(product);
  }
}
