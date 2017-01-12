import { Component } from '@angular/core';

@Component({
  selector: 'order-component',
  templateUrl: 'app/order/order.component.html'
})
export class OrderComponent {
  onSubmit(form){
    console.log(form);
  }
}