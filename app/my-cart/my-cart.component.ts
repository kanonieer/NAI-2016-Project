import { Component, Input} from '@angular/core';
import { Movie } from './../models/movie.model';

@Component({
  selector: 'my-cart-component',
  templateUrl: 'app/my-cart/my-cart.component.html'
})
export class MyCartComponent {
    @Input() cart: Movie[] = [];

}
