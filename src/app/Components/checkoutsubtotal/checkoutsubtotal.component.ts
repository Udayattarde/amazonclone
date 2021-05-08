import { Component, OnInit } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/Service/shopping-cart-service.service';

@Component({
  selector: 'app-checkoutsubtotal',
  templateUrl: './checkoutsubtotal.component.html',
  styleUrls: ['./checkoutsubtotal.component.css']
})
export class CheckoutsubtotalComponent implements OnInit {

  constructor(public service:ShoppingCartServiceService) { }

  ngOnInit() {
  }

}
