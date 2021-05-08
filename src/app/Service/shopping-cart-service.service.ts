
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartServiceService {
  shopping_cart_items:any[]=[];

  constructor() { }

  addproduct=(product)=>{
    let items=this.getShoppingCart();
    if(items)
    {
      items.push(product)
      localStorage.setItem("shopping_cart",JSON.stringify(items))
    }else
    {
      this.shopping_cart_items.push(product);
      localStorage.setItem("shopping_cart",JSON.stringify(this.shopping_cart_items))
    }
     
  }

  getShoppingCart=()=>{
    let items=localStorage.getItem("shopping_cart");
    return JSON.parse(items);
  }

  getShoppingcartLength()
  {
    let length=this.getShoppingCart();
   return length ? this.getShoppingCart().length:0
  }
  getTotal = ()=>{
    let items = this.getShoppingCart();
    return items.reduce((acc, item)=> acc+ item.price, 0)

  }
  removeItem=(p)=>{
    let items=this.getShoppingCart();
    let index = items.findIndex(items=> items.id == p.id)
    if(index>=0)
    {
      items.splice(index,1);
      return   localStorage.setItem("shopping_cart",JSON.stringify(items))
    }
  }
}
