import { Component } from '@angular/core';
import { CartService } from './../services/cart.service'; 
import { BorrowService } from './../services/borrow.service';
import { Movie } from './../models/movie.model';
import { Borrow } from './../models/borrow.model';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'order-component',
  templateUrl: 'app/order/order.component.html'
})
export class OrderComponent {

  constructor(private cartService: CartService,
   private borrowService: BorrowService, private router: Router){

  }
  totalCost(){
    let totalCost = 0;
    this.cartService.cart.forEach(value => totalCost += value.fee);
    return totalCost;      
  }
  submitForm(data: any){
    var arr: Array<number> = [];
    this.cartService.cart.forEach(movie => arr.push(movie.id));

    var borrow: Borrow = {
      form: {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: parseInt(data.phone, 10)
      },
      movieIds: arr
    }
    this.borrowService.borrowMovies(borrow).subscribe(
      data => {
        this.cartService.cleanCart();
        this.router.navigate(['/list']);
        alert("Wypożyczono!");
      },
      err => {
        alert(err._body);
      });  
  }
  goBack(){
    this.router.navigate(['/list']);
  }
}