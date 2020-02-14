import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {CartService} from '../../../services/checkout/cart.service';
import {Product} from '../../../data/product';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.less'],
  encapsulation: ViewEncapsulation.Emulated
})
export class CartComponent implements OnInit {
  items: Product[];
  checkoutForm;

  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.checkoutForm = formBuilder.group({
      name: '',
      address: ''
    })
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
