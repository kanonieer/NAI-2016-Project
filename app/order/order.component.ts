import { Component } from '@angular/core';
import { CartService } from './../services/cart.service';

@Component({
  selector: 'order-component',
  templateUrl: 'app/order/order.component.html'
})
export class OrderComponent {
  constructor(private cartService: CartService){

  }
  onClickCart(){
    console.log(this.cartService.cart);
  }
}