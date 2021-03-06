import { Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import { Movie } from './../models/movie.model';
import { CartService } from './../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'my-cart-component',
  templateUrl: 'app/my-cart/my-cart.component.html'
})
export class MyCartComponent {
    @Input() cart: Movie[] = [];
    public totalCost: number = 0;

    constructor(private cartService: CartService, private router: Router){

    }
    ngOnInit(){
      this.cart = this.cartService.cart;
    }
    anyInCart(){
      this.countTotalCost();
      return this.totalCost == 0 ? false : true;
    }

    countTotalCost() {
      this.totalCost = 0;
      this.cart.forEach(value => this.totalCost += value.fee);  
    }

    removeFromCart (movie: Movie) {
      this.cartService.removeFromCart(movie);
      this.countTotalCost();
    }
    goToOrder(){
      this.router.navigate(['/order']);
    }
}