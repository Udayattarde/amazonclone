import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/Service/shopping-cart-service.service';


@Component({
  selector: 'app-checkoutproducts',
  templateUrl: './checkoutproducts.component.html',
  styleUrls: ['./checkoutproducts.component.css']
})
export class CheckoutproductsComponent implements OnInit {
@Input() checkout_products:any[];
@Output() delete: EventEmitter<any> = new EventEmitter();
  constructor(public service:ShoppingCartServiceService) { }

  ngOnInit() {
    this.getshoppingCart();
  }

  getshoppingCart()
  {
   console.log(this.checkout_products) 
  }
  removeItem(p)
  {
     this.service.removeItem(p);
     this.delete.emit(p)
  }
}
