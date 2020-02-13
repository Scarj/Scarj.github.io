import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../cart.service';
import {Product} from '../data/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  encapsulation: ViewEncapsulation.None
})
export class CartComponent implements OnInit {
  items: Product[];

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

}
