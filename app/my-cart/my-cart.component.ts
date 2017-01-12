import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Movie } from './../models/movie.model';

@Component({
  selector: 'my-cart-component',
  templateUrl: 'app/my-cart/my-cart.component.html'
})
export class MyCartComponent {
    @Input() cart: Movie[] = [];
    public totalCost: number = 0;

    countTotalCost() {
      this.totalCost = 0;
      this.cart.forEach(value => this.totalCost += value.fee);  
    }

    removeFromCart (movie: Movie) {
      this.cart.splice(this.cart.indexOf(movie),1);
      this.countTotalCost();
  }  
}