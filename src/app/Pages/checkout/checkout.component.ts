import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/Service/shopping-cart-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
 items:any[];
  constructor(private service:ShoppingCartServiceService) { }

  ngOnInit() {
    this.getShoppingCart();
  }

  getShoppingCart()
  {
     this.items=this.service.getShoppingCart();
  }
  refreshAfteDelete(p)
  {
    this.getShoppingCart();
  }
}
