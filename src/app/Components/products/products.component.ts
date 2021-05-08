import { Component, OnInit,Input } from '@angular/core';
import { ShoppingCartServiceService } from 'src/app/Service/shopping-cart-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
@Input() products:any[];
  constructor(private service : ShoppingCartServiceService) { }

  ngOnInit() {
  }

  addToCart(product)
  {
this.service.addproduct(product)
  }

}
