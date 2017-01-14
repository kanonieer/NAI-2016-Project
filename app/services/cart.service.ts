import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';
import { Subject }    from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Movie } from './../models/movie.model';

@Injectable()
export class CartService {

    cart: Movie[] = [];

    addToCart(movie: Movie) {
      this.cart.push(movie);
    }

    removeFromCart(movie: Movie){
      this.cart.splice(this.cart.indexOf(movie),1);
    }
}