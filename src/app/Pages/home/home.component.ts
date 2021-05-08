import { Component, OnInit } from '@angular/core';
import { ProductsApiService } from 'src/app/Service/products-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  product:any[];
  constructor(private service:ProductsApiService) { }

  ngOnInit():void {
    this.getProducts();
  }

  getProducts()
  {
    this.service.getJson().subscribe(res=>
       { 
  
         this.product=res;
      })
  }
 
}
