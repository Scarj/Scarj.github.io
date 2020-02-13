import {Component, OnInit} from '@angular/core';
import {CartService} from '../cart.service';
import {ShippingCost} from '../data/shippingCost';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.less']
})
export class ShippingComponent implements OnInit {
  shippingCosts: Observable<ShippingCost[]>;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
