import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Product} from './data/product';
import {ShippingCost} from './data/shippingCost';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: Product[] = [];

  constructor(private httpClient: HttpClient) {
  }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  getShippingPrices() {
    return this.httpClient.get('/partyLions/assets/data/shipping.json');
  }
}
